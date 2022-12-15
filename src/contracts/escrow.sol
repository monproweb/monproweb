// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract Escrow {
  // The address of the client
  address payable public client;

  // The address of the developer
  address payable public developer;

  // The amount of funds being held in escrow
  uint256 public amount;

  // The status of the escrow (0 = Open, 1 = Released to client, 2 = Released to developer)
  uint8 public status;

  // Event for when the escrow is funded
  event Funded(uint256 amount);

  // Event for when the escrow is released to the client
  event ReleasedToClient(uint256 amount);

  // Event for when the escrow is released to the developer
  event ReleasedToDeveloper(uint256 amount);

  // Constructor to set the client and developer addresses
  constructor(address payable _client, address payable _developer) public {
    client = _client;
    developer = _developer;
  }

  // Function to fund the escrow with a specified amount of funds
  function fund(uint256 _amount) public payable {
    // Check that the caller is the client
    require(msg.sender == client, "Only the client can fund the escrow");

    // Check that the escrow is open
    require(status == 0, "Escrow is not open");

    // Update the amount of funds in the escrow
    amount += _amount;

    // Emit a funded event
    emit Funded(_amount);
  }

  // Function to release the escrow to the client
  function releaseToClient() public {
    // Check that the caller is the developer
    require(msg.sender == developer, "Only the developer can release the escrow to the client");

    // Check that the escrow is open
    require(status == 0, "Escrow is not open");

    // Transfer the funds to the client
    client.transfer(amount);

    // Update the status of the escrow
    status = 1;

    // Emit a released to client event
    emit ReleasedToClient(amount);
  }

  // Function to release the escrow to the developer
  function releaseToDeveloper() public {
    // Check that the caller is the client
    require(msg.sender == client, "Only the client can release the escrow to the developer");

    // Check that the escrow is open
    require(status == 0, "Escrow is not open");

    // Transfer the funds to the developer
    developer.transfer(amount);

    // Update the status of the escrow
    status = 2;

    // Emit a released to developer event
    emit ReleasedToDeveloper(amount);
  }
}
