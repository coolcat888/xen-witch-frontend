/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface XenWitchInterface extends utils.Interface {
  functions: {
    "bulkMint(uint256,address)": FunctionFragment;
    "bulkMintSpecialTerm(uint256,uint256,address)": FunctionFragment;
    "call(address,uint256,bytes)": FunctionFragment;
    "contractAddress()": FunctionFragment;
    "createCount(address)": FunctionFragment;
    "minDonate()": FunctionFragment;
    "owner()": FunctionFragment;
    "setMinDonate(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bulkMint"
      | "bulkMintSpecialTerm"
      | "call"
      | "contractAddress"
      | "createCount"
      | "minDonate"
      | "owner"
      | "setMinDonate"
      | "setOwner"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bulkMint",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "bulkMintSpecialTerm",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "call",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "createCount", values: [string]): string;
  encodeFunctionData(functionFragment: "minDonate", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMinDonate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bulkMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bulkMintSpecialTerm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minDonate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinDonate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnerUpdated(address,address)": EventFragment;
    "XenWitchCreate()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "XenWitchCreate"): EventFragment;
}

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface XenWitchCreateEventObject {}
export type XenWitchCreateEvent = TypedEvent<[], XenWitchCreateEventObject>;

export type XenWitchCreateEventFilter = TypedEventFilter<XenWitchCreateEvent>;

export interface XenWitch extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XenWitchInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bulkMint(
      amount: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bulkMintSpecialTerm(
      amount: BigNumberish,
      term: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    call(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<[string]>;

    createCount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    minDonate(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setMinDonate(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bulkMint(
    amount: BigNumberish,
    ref: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bulkMintSpecialTerm(
    amount: BigNumberish,
    term: BigNumberish,
    ref: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  call(
    target: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractAddress(overrides?: CallOverrides): Promise<string>;

  createCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  minDonate(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setMinDonate(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bulkMint(
      amount: BigNumberish,
      ref: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bulkMintSpecialTerm(
      amount: BigNumberish,
      term: BigNumberish,
      ref: string,
      overrides?: CallOverrides
    ): Promise<void>;

    call(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    contractAddress(overrides?: CallOverrides): Promise<string>;

    createCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minDonate(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setMinDonate(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnerUpdated(address,address)"(
      user?: string | null,
      newOwner?: string | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: string | null,
      newOwner?: string | null
    ): OwnerUpdatedEventFilter;

    "XenWitchCreate()"(): XenWitchCreateEventFilter;
    XenWitchCreate(): XenWitchCreateEventFilter;
  };

  estimateGas: {
    bulkMint(
      amount: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bulkMintSpecialTerm(
      amount: BigNumberish,
      term: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    call(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    createCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minDonate(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setMinDonate(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bulkMint(
      amount: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bulkMintSpecialTerm(
      amount: BigNumberish,
      term: BigNumberish,
      ref: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    call(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minDonate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinDonate(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
