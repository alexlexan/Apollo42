import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Bid = {
  __typename?: 'Bid';
  amount: Scalars['String'];
  bidderId: Scalars['String'];
  ftTokenId: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  nftContractId: Scalars['String'];
  tokenId: Scalars['String'];
};

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['String']>;
  amount_contains?: InputMaybe<Scalars['String']>;
  amount_contains_nocase?: InputMaybe<Scalars['String']>;
  amount_ends_with?: InputMaybe<Scalars['String']>;
  amount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount_gt?: InputMaybe<Scalars['String']>;
  amount_gte?: InputMaybe<Scalars['String']>;
  amount_in?: InputMaybe<Array<Scalars['String']>>;
  amount_lt?: InputMaybe<Scalars['String']>;
  amount_lte?: InputMaybe<Scalars['String']>;
  amount_not?: InputMaybe<Scalars['String']>;
  amount_not_contains?: InputMaybe<Scalars['String']>;
  amount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  amount_not_ends_with?: InputMaybe<Scalars['String']>;
  amount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount_not_in?: InputMaybe<Array<Scalars['String']>>;
  amount_not_starts_with?: InputMaybe<Scalars['String']>;
  amount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount_starts_with?: InputMaybe<Scalars['String']>;
  amount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidderId?: InputMaybe<Scalars['String']>;
  bidderId_contains?: InputMaybe<Scalars['String']>;
  bidderId_contains_nocase?: InputMaybe<Scalars['String']>;
  bidderId_ends_with?: InputMaybe<Scalars['String']>;
  bidderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidderId_gt?: InputMaybe<Scalars['String']>;
  bidderId_gte?: InputMaybe<Scalars['String']>;
  bidderId_in?: InputMaybe<Array<Scalars['String']>>;
  bidderId_lt?: InputMaybe<Scalars['String']>;
  bidderId_lte?: InputMaybe<Scalars['String']>;
  bidderId_not?: InputMaybe<Scalars['String']>;
  bidderId_not_contains?: InputMaybe<Scalars['String']>;
  bidderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidderId_not_ends_with?: InputMaybe<Scalars['String']>;
  bidderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidderId_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidderId_not_starts_with?: InputMaybe<Scalars['String']>;
  bidderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidderId_starts_with?: InputMaybe<Scalars['String']>;
  bidderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId?: InputMaybe<Scalars['String']>;
  ftTokenId_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_gt?: InputMaybe<Scalars['String']>;
  ftTokenId_gte?: InputMaybe<Scalars['String']>;
  ftTokenId_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_lt?: InputMaybe<Scalars['String']>;
  ftTokenId_lte?: InputMaybe<Scalars['String']>;
  ftTokenId_not?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nftContractId?: InputMaybe<Scalars['String']>;
  nftContractId_contains?: InputMaybe<Scalars['String']>;
  nftContractId_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_gt?: InputMaybe<Scalars['String']>;
  nftContractId_gte?: InputMaybe<Scalars['String']>;
  nftContractId_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_lt?: InputMaybe<Scalars['String']>;
  nftContractId_lte?: InputMaybe<Scalars['String']>;
  nftContractId_not?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_not_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Bid_OrderBy {
  Amount = 'amount',
  BidderId = 'bidderId',
  FtTokenId = 'ftTokenId',
  Id = 'id',
  IsActive = 'isActive',
  NftContractId = 'nftContractId',
  TokenId = 'tokenId'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Buy = {
  __typename?: 'Buy';
  buyerId: Scalars['String'];
  ftTokenId: Scalars['String'];
  id: Scalars['ID'];
  nftContractId: Scalars['String'];
  ownerId: Scalars['String'];
  price: Scalars['String'];
  tokenId: Scalars['String'];
};

export type Buy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  buyerId?: InputMaybe<Scalars['String']>;
  buyerId_contains?: InputMaybe<Scalars['String']>;
  buyerId_contains_nocase?: InputMaybe<Scalars['String']>;
  buyerId_ends_with?: InputMaybe<Scalars['String']>;
  buyerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyerId_gt?: InputMaybe<Scalars['String']>;
  buyerId_gte?: InputMaybe<Scalars['String']>;
  buyerId_in?: InputMaybe<Array<Scalars['String']>>;
  buyerId_lt?: InputMaybe<Scalars['String']>;
  buyerId_lte?: InputMaybe<Scalars['String']>;
  buyerId_not?: InputMaybe<Scalars['String']>;
  buyerId_not_contains?: InputMaybe<Scalars['String']>;
  buyerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  buyerId_not_ends_with?: InputMaybe<Scalars['String']>;
  buyerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  buyerId_not_starts_with?: InputMaybe<Scalars['String']>;
  buyerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyerId_starts_with?: InputMaybe<Scalars['String']>;
  buyerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId?: InputMaybe<Scalars['String']>;
  ftTokenId_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_gt?: InputMaybe<Scalars['String']>;
  ftTokenId_gte?: InputMaybe<Scalars['String']>;
  ftTokenId_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_lt?: InputMaybe<Scalars['String']>;
  ftTokenId_lte?: InputMaybe<Scalars['String']>;
  ftTokenId_not?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nftContractId?: InputMaybe<Scalars['String']>;
  nftContractId_contains?: InputMaybe<Scalars['String']>;
  nftContractId_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_gt?: InputMaybe<Scalars['String']>;
  nftContractId_gte?: InputMaybe<Scalars['String']>;
  nftContractId_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_lt?: InputMaybe<Scalars['String']>;
  nftContractId_lte?: InputMaybe<Scalars['String']>;
  nftContractId_not?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_not_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Buy_OrderBy {
  BuyerId = 'buyerId',
  FtTokenId = 'ftTokenId',
  Id = 'id',
  NftContractId = 'nftContractId',
  OwnerId = 'ownerId',
  Price = 'price',
  TokenId = 'tokenId'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  buy?: Maybe<Buy>;
  buys: Array<Buy>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type QueryBuyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBuysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Buy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Buy_Filter>;
};


export type QuerySaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Sale = {
  __typename?: 'Sale';
  approvalId: Scalars['BigInt'];
  endPrice?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
  ftTokenId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isAuction?: Maybe<Scalars['Boolean']>;
  nftContractId: Scalars['String'];
  ownerId: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
  transactionFee?: Maybe<Scalars['String']>;
};

export type Sale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approvalId?: InputMaybe<Scalars['BigInt']>;
  approvalId_gt?: InputMaybe<Scalars['BigInt']>;
  approvalId_gte?: InputMaybe<Scalars['BigInt']>;
  approvalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  approvalId_lt?: InputMaybe<Scalars['BigInt']>;
  approvalId_lte?: InputMaybe<Scalars['BigInt']>;
  approvalId_not?: InputMaybe<Scalars['BigInt']>;
  approvalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endPrice?: InputMaybe<Scalars['String']>;
  endPrice_contains?: InputMaybe<Scalars['String']>;
  endPrice_contains_nocase?: InputMaybe<Scalars['String']>;
  endPrice_ends_with?: InputMaybe<Scalars['String']>;
  endPrice_ends_with_nocase?: InputMaybe<Scalars['String']>;
  endPrice_gt?: InputMaybe<Scalars['String']>;
  endPrice_gte?: InputMaybe<Scalars['String']>;
  endPrice_in?: InputMaybe<Array<Scalars['String']>>;
  endPrice_lt?: InputMaybe<Scalars['String']>;
  endPrice_lte?: InputMaybe<Scalars['String']>;
  endPrice_not?: InputMaybe<Scalars['String']>;
  endPrice_not_contains?: InputMaybe<Scalars['String']>;
  endPrice_not_contains_nocase?: InputMaybe<Scalars['String']>;
  endPrice_not_ends_with?: InputMaybe<Scalars['String']>;
  endPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  endPrice_not_in?: InputMaybe<Array<Scalars['String']>>;
  endPrice_not_starts_with?: InputMaybe<Scalars['String']>;
  endPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endPrice_starts_with?: InputMaybe<Scalars['String']>;
  endPrice_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endedAt?: InputMaybe<Scalars['String']>;
  endedAt_contains?: InputMaybe<Scalars['String']>;
  endedAt_contains_nocase?: InputMaybe<Scalars['String']>;
  endedAt_ends_with?: InputMaybe<Scalars['String']>;
  endedAt_ends_with_nocase?: InputMaybe<Scalars['String']>;
  endedAt_gt?: InputMaybe<Scalars['String']>;
  endedAt_gte?: InputMaybe<Scalars['String']>;
  endedAt_in?: InputMaybe<Array<Scalars['String']>>;
  endedAt_lt?: InputMaybe<Scalars['String']>;
  endedAt_lte?: InputMaybe<Scalars['String']>;
  endedAt_not?: InputMaybe<Scalars['String']>;
  endedAt_not_contains?: InputMaybe<Scalars['String']>;
  endedAt_not_contains_nocase?: InputMaybe<Scalars['String']>;
  endedAt_not_ends_with?: InputMaybe<Scalars['String']>;
  endedAt_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  endedAt_not_in?: InputMaybe<Array<Scalars['String']>>;
  endedAt_not_starts_with?: InputMaybe<Scalars['String']>;
  endedAt_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endedAt_starts_with?: InputMaybe<Scalars['String']>;
  endedAt_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId?: InputMaybe<Scalars['String']>;
  ftTokenId_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_gt?: InputMaybe<Scalars['String']>;
  ftTokenId_gte?: InputMaybe<Scalars['String']>;
  ftTokenId_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_lt?: InputMaybe<Scalars['String']>;
  ftTokenId_lte?: InputMaybe<Scalars['String']>;
  ftTokenId_not?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains?: InputMaybe<Scalars['String']>;
  ftTokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ftTokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with?: InputMaybe<Scalars['String']>;
  ftTokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuction?: InputMaybe<Scalars['Boolean']>;
  isAuction_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuction_not?: InputMaybe<Scalars['Boolean']>;
  isAuction_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nftContractId?: InputMaybe<Scalars['String']>;
  nftContractId_contains?: InputMaybe<Scalars['String']>;
  nftContractId_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_gt?: InputMaybe<Scalars['String']>;
  nftContractId_gte?: InputMaybe<Scalars['String']>;
  nftContractId_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_lt?: InputMaybe<Scalars['String']>;
  nftContractId_lte?: InputMaybe<Scalars['String']>;
  nftContractId_not?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains?: InputMaybe<Scalars['String']>;
  nftContractId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftContractId_not_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with?: InputMaybe<Scalars['String']>;
  nftContractId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAt?: InputMaybe<Scalars['String']>;
  startedAt_contains?: InputMaybe<Scalars['String']>;
  startedAt_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAt_ends_with?: InputMaybe<Scalars['String']>;
  startedAt_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAt_gt?: InputMaybe<Scalars['String']>;
  startedAt_gte?: InputMaybe<Scalars['String']>;
  startedAt_in?: InputMaybe<Array<Scalars['String']>>;
  startedAt_lt?: InputMaybe<Scalars['String']>;
  startedAt_lte?: InputMaybe<Scalars['String']>;
  startedAt_not?: InputMaybe<Scalars['String']>;
  startedAt_not_contains?: InputMaybe<Scalars['String']>;
  startedAt_not_contains_nocase?: InputMaybe<Scalars['String']>;
  startedAt_not_ends_with?: InputMaybe<Scalars['String']>;
  startedAt_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startedAt_not_in?: InputMaybe<Array<Scalars['String']>>;
  startedAt_not_starts_with?: InputMaybe<Scalars['String']>;
  startedAt_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  startedAt_starts_with?: InputMaybe<Scalars['String']>;
  startedAt_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionFee?: InputMaybe<Scalars['String']>;
  transactionFee_contains?: InputMaybe<Scalars['String']>;
  transactionFee_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionFee_ends_with?: InputMaybe<Scalars['String']>;
  transactionFee_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionFee_gt?: InputMaybe<Scalars['String']>;
  transactionFee_gte?: InputMaybe<Scalars['String']>;
  transactionFee_in?: InputMaybe<Array<Scalars['String']>>;
  transactionFee_lt?: InputMaybe<Scalars['String']>;
  transactionFee_lte?: InputMaybe<Scalars['String']>;
  transactionFee_not?: InputMaybe<Scalars['String']>;
  transactionFee_not_contains?: InputMaybe<Scalars['String']>;
  transactionFee_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionFee_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionFee_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionFee_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionFee_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionFee_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionFee_starts_with?: InputMaybe<Scalars['String']>;
  transactionFee_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Sale_OrderBy {
  ApprovalId = 'approvalId',
  EndPrice = 'endPrice',
  EndedAt = 'endedAt',
  FtTokenId = 'ftTokenId',
  Id = 'id',
  IsActive = 'isActive',
  IsAuction = 'isAuction',
  NftContractId = 'nftContractId',
  OwnerId = 'ownerId',
  Price = 'price',
  StartedAt = 'startedAt',
  TokenId = 'tokenId',
  TransactionFee = 'transactionFee'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  buy?: Maybe<Buy>;
  buys: Array<Buy>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type SubscriptionBuyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBuysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Buy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Buy_Filter>;
};


export type SubscriptionSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  __typename?: 'Token';
  id: Scalars['ID'];
  orders: Array<Scalars['ID']>;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orders?: InputMaybe<Array<Scalars['ID']>>;
  orders_contains?: InputMaybe<Array<Scalars['ID']>>;
  orders_contains_nocase?: InputMaybe<Array<Scalars['ID']>>;
  orders_not?: InputMaybe<Array<Scalars['ID']>>;
  orders_not_contains?: InputMaybe<Array<Scalars['ID']>>;
  orders_not_contains_nocase?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Token_OrderBy {
  Id = 'id',
  Orders = 'orders'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetSalesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSalesQuery = { __typename?: 'Query', sales: Array<{ __typename?: 'Sale', id: string, price?: string | null, ownerId: string, approvalId: any, nftContractId: string, ftTokenId?: string | null }> };


export const GetSalesDocument = gql`
    query getSales {
  sales(first: 8) {
    id
    price
    ownerId
    approvalId
    nftContractId
    ftTokenId
  }
}
    `;

/**
 * __useGetSalesQuery__
 *
 * To run a query within a React component, call `useGetSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSalesQuery(baseOptions?: Apollo.QueryHookOptions<GetSalesQuery, GetSalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSalesQuery, GetSalesQueryVariables>(GetSalesDocument, options);
      }
export function useGetSalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSalesQuery, GetSalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSalesQuery, GetSalesQueryVariables>(GetSalesDocument, options);
        }
export type GetSalesQueryHookResult = ReturnType<typeof useGetSalesQuery>;
export type GetSalesLazyQueryHookResult = ReturnType<typeof useGetSalesLazyQuery>;
export type GetSalesQueryResult = Apollo.QueryResult<GetSalesQuery, GetSalesQueryVariables>;