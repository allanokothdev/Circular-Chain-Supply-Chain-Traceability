// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CircularChain is ReentrancyGuard {

    using Counters for Counters.Counter;
    Counters.Counter private productIds;
    Counters.Counter private stageIds;

    //Listing Price of an Product on the platform
    uint256 public listingPrice = 0.025 ether;

    mapping (uint256 => Product) public productList;
    mapping (uint256 => Stage) public stageList;

    address payable public admin;


    struct Location {
        string location;
        uint32 latitude;
        uint32 longitude;
    }

    struct Esg {
        uint32 natureScore;
        uint32 climateScore;
        uint32 labourScore;
        uint32 communityScore;
        uint32 wasteScore;
    }

    struct ESGScoresNLength {
        Esg esg;
        uint256 noOfItems;
    }

    struct Product {
        uint256 productId;
        address publisher;
        address[] stakeholders;
        uint256 brandId;
    }

    struct Stage {
        uint256 stageId;
        string title;
        string summary;
        address publisher;
        uint256 timestamp;
        Location locale;
        Esg esgScore;
        uint256 productId;
    }

    event ProductItemCreated (
        uint256 indexed productId,
        address publisher,
        address[] stakeholders,
        uint256 brandId
    );

    event StageItemCreated (
      uint256 indexed stageId,
      string title,
      string summary,
      address publisher,
      uint256 timestamp,
      Location locale,
      Esg esgScore
    );

    constructor() payable {
        admin = payable(msg.sender);
    }

     /* Updates the listing price of the contract */
     function updateListingPrice(uint256 _listingPrice) public payable {
        require(admin == msg.sender, "Only admin can update listing price.");
        listingPrice = _listingPrice;
      }

    /// @notice Function to get the listing price for frontend
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }


    function createProduct(uint256 _brandId, address[] memory _stakeholders)
    public payable nonReentrant {
        require(msg.value > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        productIds.increment();
        uint256 newProductId = productIds.current();

        productList[newProductId] = Product(newProductId, msg.sender, _stakeholders, _brandId);

        emit ProductItemCreated(newProductId, msg.sender, _stakeholders, _brandId);

        payable(address(this)).transfer(msg.value);
    }


    function fetchProduct(uint256 _productId) public view returns (address, address[] memory, uint256, Esg memory, uint256) {
        Product memory product = productList[_productId];
        ESGScoresNLength memory esgScoresNLength = calculateAggregateESGScore(_productId);
        return (product.publisher, product.stakeholders, product.brandId, esgScoresNLength.esg, esgScoresNLength.noOfItems);
    }

    function addNewStage(uint256 _productId, string memory _title, string memory _summary, string memory _location,
    uint32 _latitude, uint32 _longitude, Esg memory _esg) public {
        address[] memory _stakeholders = productList[_productId].stakeholders;

        for(uint i=0; i<_stakeholders.length; i++){
            if (msg.sender == _stakeholders[i]) {

                stageIds.increment();
                uint256 newStageId = stageIds.current();

                Location memory location = Location(_location, _latitude, _longitude);
                stageList[newStageId] = Stage(newStageId, _title, _summary, msg.sender, block.timestamp,
                location, _esg, _productId);
                
                emit StageItemCreated(newStageId, _title, _summary, msg.sender, block.timestamp, location, _esg);
                
            } 
        }
    }

    function fetchProductStages(uint256 _productId) public view returns (Stage[] memory) {
        uint totalItemCount = stageIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (stageList[i + 1].productId == _productId) {
            itemCount += 1;
        }
      }

      Stage[] memory items = new Stage[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (stageList[i + 1].productId == _productId) {
          uint currentId = i + 1;
          Stage storage currentItem = stageList[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    function calculateAggregateESGScore(uint256 _productId) public view returns (ESGScoresNLength memory) {
        uint totalItemCount = stageIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        uint32 totNatureScore = 0;
        uint32 totClimateScore = 0;
        uint32 totLabourScore = 0;
        uint32 totCommunityScore = 0;
        uint32 totWasteScore = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (stageList[i + 1].productId == _productId) {
            itemCount += 1;
        }
      }

      Stage[] memory items = new Stage[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (stageList[i + 1].productId == _productId) {
          uint currentId = i + 1;
          Stage storage currentItem = stageList[currentId];

          Esg memory esgItem = currentItem.esgScore;

          totNatureScore += esgItem.natureScore;
          totClimateScore += esgItem.climateScore;
          totLabourScore += esgItem.labourScore;
          totCommunityScore += esgItem.communityScore;
          totWasteScore += esgItem.wasteScore;

          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }

      Esg memory esgScores = Esg(totNatureScore, totClimateScore, totLabourScore, totCommunityScore, totWasteScore);

      ESGScoresNLength memory esgScoresNLength = ESGScoresNLength(esgScores, items.length);

      return (esgScoresNLength);
    }

    function withdraw() public onlyAdmin {
        admin.transfer(address(this).balance);
    }

    modifier onlyAdmin() {
        assert(msg.sender == admin);
        _;
    }
}


