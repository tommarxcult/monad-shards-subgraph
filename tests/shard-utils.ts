import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  FinishedMission,
  MintFeeUpdated,
  OwnershipTransferred,
  StatusUpdated,
  Transfer,
  WhitelistUpdated
} from "../generated/Shard/Shard"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBaseURIUpdatedEvent(
  _baseTokenURI: string
): BaseURIUpdated {
  let baseUriUpdatedEvent = changetype<BaseURIUpdated>(newMockEvent())

  baseUriUpdatedEvent.parameters = new Array()

  baseUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_baseTokenURI",
      ethereum.Value.fromString(_baseTokenURI)
    )
  )

  return baseUriUpdatedEvent
}

export function createFinishedMissionEvent(
  _recipient: Address,
  _mission_symbol: string
): FinishedMission {
  let finishedMissionEvent = changetype<FinishedMission>(newMockEvent())

  finishedMissionEvent.parameters = new Array()

  finishedMissionEvent.parameters.push(
    new ethereum.EventParam(
      "_recipient",
      ethereum.Value.fromAddress(_recipient)
    )
  )
  finishedMissionEvent.parameters.push(
    new ethereum.EventParam(
      "_mission_symbol",
      ethereum.Value.fromString(_mission_symbol)
    )
  )

  return finishedMissionEvent
}

export function createMintFeeUpdatedEvent(_new_fee: BigInt): MintFeeUpdated {
  let mintFeeUpdatedEvent = changetype<MintFeeUpdated>(newMockEvent())

  mintFeeUpdatedEvent.parameters = new Array()

  mintFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_new_fee",
      ethereum.Value.fromUnsignedBigInt(_new_fee)
    )
  )

  return mintFeeUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createStatusUpdatedEvent(_status: i32): StatusUpdated {
  let statusUpdatedEvent = changetype<StatusUpdated>(newMockEvent())

  statusUpdatedEvent.parameters = new Array()

  statusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_status))
    )
  )

  return statusUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createWhitelistUpdatedEvent(): WhitelistUpdated {
  let whitelistUpdatedEvent = changetype<WhitelistUpdated>(newMockEvent())

  whitelistUpdatedEvent.parameters = new Array()

  return whitelistUpdatedEvent
}
