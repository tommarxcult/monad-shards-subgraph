import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIUpdated as BaseURIUpdatedEvent,
  FinishedMission as FinishedMissionEvent,
  MintFeeUpdated as MintFeeUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  StatusUpdated as StatusUpdatedEvent,
  Transfer as TransferEvent,
  WhitelistUpdated as WhitelistUpdatedEvent
} from "../generated/Shard/Shard"
import {
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  FinishedMission,
  MintFeeUpdated,
  OwnershipTransferred,
  StatusUpdated,
  Transfer,
  WhitelistUpdated,
  Token
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseURIUpdated(event: BaseURIUpdatedEvent): void {
  let entity = new BaseURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._baseTokenURI = event.params._baseTokenURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFinishedMission(event: FinishedMissionEvent): void {
  let entity = new FinishedMission(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._recipient = event.params._recipient
  entity._mission_symbol = event.params._mission_symbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeUpdated(event: MintFeeUpdatedEvent): void {
  let entity = new MintFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._new_fee = event.params._new_fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStatusUpdated(event: StatusUpdatedEvent): void {
  let entity = new StatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._status = event.params._status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let transferEntity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transferEntity.from = event.params.from;
  transferEntity.to = event.params.to;
  transferEntity.tokenId = event.params.tokenId;
  transferEntity.blockNumber = event.block.number;
  transferEntity.blockTimestamp = event.block.timestamp;
  transferEntity.transactionHash = event.transaction.hash;
  transferEntity.save();

  let contractAddress = event.address.toHexString();
  let tokenIdString = event.params.tokenId.toString();
  let tokenEntityId = contractAddress + "-" + tokenIdString;

  let token = Token.load(tokenEntityId);

  if (token == null) {
    token = new Token(tokenEntityId);
    // On first creation:
    token.contract = event.address;       // Bytes
    token.tokenId = event.params.tokenId; // BigInt
  }

  token.owner = event.params.to;

  token.save();
}


export function handleWhitelistUpdated(event: WhitelistUpdatedEvent): void {
  let entity = new WhitelistUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
