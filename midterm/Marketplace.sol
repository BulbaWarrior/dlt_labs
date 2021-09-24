// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Marketplace {

    struct Item {
        uint256 price;
        address developer;
        string title;
        string purpose;
        string source_code;
    }

    struct PublicItem {
        uint256 price;
        address developer;
        string title;
        string purpose;
    }

    Item[] items;
    mapping(address => uint256[]) owners;
    mapping(address => uint256) money;

    uint256 comission = 3000 wei;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw(uint256 amount) public{
        require(money[msg.sender] >= amount);
        money[msg.sender] -= amount;
        payable(owner).transfer(amount);
    }



    function getPublicItem(uint256 id) public view returns (PublicItem memory) {
        Item memory item = items[id];
        return PublicItem(
            {
                price: item.price,
                developer: item.developer,
                title: item.title,
                purpose: item.purpose
            }
        );
    }

    function putItem(uint256 price, string memory title, string memory purpose, string memory source_code) public {
        require(price >= comission, "price too low");
        uint256 item_id = items.length;
        items.push(
            Item(
                {
                    price: price,
                    developer: msg.sender,
                    title: title,
                    purpose: purpose,
                    source_code: source_code
                }
            )
        );
        owners[msg.sender].push(item_id);
    }

    function editPrice(uint256 item_id, uint256 new_price) public {
        require(new_price >= comission, "price too low");
        require(items[item_id].developer == msg.sender, "not developer of the contract");
        Item storage item = items[item_id];
        item.price = new_price;

    }

    function buyItem(uint256 id) public payable {
        require(!owns(msg.sender, id), "already owned");
        require(id < items.length, "item does not exist");
        Item memory item = items[id];
        require(msg.value >= item.price, "value is less than item price");
        owners[msg.sender].push(id);
        money[item.developer] += msg.value - comission;
        money[owner] += comission;
        //payable(item.developer).transfer(msg.value - comission);
    }

    function getOwned() public view returns(uint256[] memory) {
        return owners[msg.sender];
    }

    function owns(address addr, uint256 item_id) internal view returns (bool) {
        uint256[] memory owned = owners[addr];
        for(uint256 i = 0; i < owned.length; i++){
            if(owned[i] == item_id) {
                return true;
            }
        }
        return false;

    }

    function getItem(uint256 id) public view returns (Item memory){
        require(owns(msg.sender, id), "item not owned");
        return items[id];
    }

    //debug
    function getMoney() public view returns (uint256) {
        return money[msg.sender];
    }
}
