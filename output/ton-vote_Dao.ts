import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type CreateDao = {
    $$type: 'CreateDao';
    owner: Address;
    proposalOwner: Address;
    metadata: Address;
}

export function storeCreateDao(src: CreateDao) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(446717501, 32);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.proposalOwner);
        b_0.storeAddress(src.metadata);
    };
}

export function loadCreateDao(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 446717501) { throw Error('Invalid prefix'); }
    let _owner = sc_0.loadAddress();
    let _proposalOwner = sc_0.loadAddress();
    let _metadata = sc_0.loadAddress();
    return { $$type: 'CreateDao' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function loadTupleCreateDao(source: TupleReader) {
    let _owner = source.readAddress();
    let _proposalOwner = source.readAddress();
    let _metadata = source.readAddress();
    return { $$type: 'CreateDao' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function storeTupleCreateDao(source: CreateDao) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.proposalOwner);
    builder.writeAddress(source.metadata);
    return builder.build();
}

function dictValueParserCreateDao(): DictionaryValue<CreateDao> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCreateDao(src)).endCell());
        },
        parse: (src) => {
            return loadCreateDao(src.loadRef().beginParse());
        }
    }
}

export type SendDaoInit = {
    $$type: 'SendDaoInit';
    owner: Address;
    proposalOwner: Address;
    metadata: Address;
}

export function storeSendDaoInit(src: SendDaoInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3367586747, 32);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.proposalOwner);
        b_0.storeAddress(src.metadata);
    };
}

export function loadSendDaoInit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3367586747) { throw Error('Invalid prefix'); }
    let _owner = sc_0.loadAddress();
    let _proposalOwner = sc_0.loadAddress();
    let _metadata = sc_0.loadAddress();
    return { $$type: 'SendDaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function loadTupleSendDaoInit(source: TupleReader) {
    let _owner = source.readAddress();
    let _proposalOwner = source.readAddress();
    let _metadata = source.readAddress();
    return { $$type: 'SendDaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function storeTupleSendDaoInit(source: SendDaoInit) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.proposalOwner);
    builder.writeAddress(source.metadata);
    return builder.build();
}

function dictValueParserSendDaoInit(): DictionaryValue<SendDaoInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendDaoInit(src)).endCell());
        },
        parse: (src) => {
            return loadSendDaoInit(src.loadRef().beginParse());
        }
    }
}

export type SetCreateDaoFee = {
    $$type: 'SetCreateDaoFee';
    newCreateDaoFee: bigint;
}

export function storeSetCreateDaoFee(src: SetCreateDaoFee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3466008403, 32);
        b_0.storeUint(src.newCreateDaoFee, 64);
    };
}

export function loadSetCreateDaoFee(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3466008403) { throw Error('Invalid prefix'); }
    let _newCreateDaoFee = sc_0.loadUintBig(64);
    return { $$type: 'SetCreateDaoFee' as const, newCreateDaoFee: _newCreateDaoFee };
}

function loadTupleSetCreateDaoFee(source: TupleReader) {
    let _newCreateDaoFee = source.readBigNumber();
    return { $$type: 'SetCreateDaoFee' as const, newCreateDaoFee: _newCreateDaoFee };
}

function storeTupleSetCreateDaoFee(source: SetCreateDaoFee) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.newCreateDaoFee);
    return builder.build();
}

function dictValueParserSetCreateDaoFee(): DictionaryValue<SetCreateDaoFee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetCreateDaoFee(src)).endCell());
        },
        parse: (src) => {
            return loadSetCreateDaoFee(src.loadRef().beginParse());
        }
    }
}

export type SendToDaoSetFwdMsgFee = {
    $$type: 'SendToDaoSetFwdMsgFee';
    daoId: bigint;
    newFwdMsgFee: bigint;
}

export function storeSendToDaoSetFwdMsgFee(src: SendToDaoSetFwdMsgFee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1477819782, 32);
        b_0.storeUint(src.daoId, 32);
        b_0.storeUint(src.newFwdMsgFee, 64);
    };
}

export function loadSendToDaoSetFwdMsgFee(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1477819782) { throw Error('Invalid prefix'); }
    let _daoId = sc_0.loadUintBig(32);
    let _newFwdMsgFee = sc_0.loadUintBig(64);
    return { $$type: 'SendToDaoSetFwdMsgFee' as const, daoId: _daoId, newFwdMsgFee: _newFwdMsgFee };
}

function loadTupleSendToDaoSetFwdMsgFee(source: TupleReader) {
    let _daoId = source.readBigNumber();
    let _newFwdMsgFee = source.readBigNumber();
    return { $$type: 'SendToDaoSetFwdMsgFee' as const, daoId: _daoId, newFwdMsgFee: _newFwdMsgFee };
}

function storeTupleSendToDaoSetFwdMsgFee(source: SendToDaoSetFwdMsgFee) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.daoId);
    builder.writeNumber(source.newFwdMsgFee);
    return builder.build();
}

function dictValueParserSendToDaoSetFwdMsgFee(): DictionaryValue<SendToDaoSetFwdMsgFee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendToDaoSetFwdMsgFee(src)).endCell());
        },
        parse: (src) => {
            return loadSendToDaoSetFwdMsgFee(src.loadRef().beginParse());
        }
    }
}

export type SetRegistryAdmin = {
    $$type: 'SetRegistryAdmin';
    newAdmin: Address;
}

export function storeSetRegistryAdmin(src: SetRegistryAdmin) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3335943114, 32);
        b_0.storeAddress(src.newAdmin);
    };
}

export function loadSetRegistryAdmin(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3335943114) { throw Error('Invalid prefix'); }
    let _newAdmin = sc_0.loadAddress();
    return { $$type: 'SetRegistryAdmin' as const, newAdmin: _newAdmin };
}

function loadTupleSetRegistryAdmin(source: TupleReader) {
    let _newAdmin = source.readAddress();
    return { $$type: 'SetRegistryAdmin' as const, newAdmin: _newAdmin };
}

function storeTupleSetRegistryAdmin(source: SetRegistryAdmin) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newAdmin);
    return builder.build();
}

function dictValueParserSetRegistryAdmin(): DictionaryValue<SetRegistryAdmin> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetRegistryAdmin(src)).endCell());
        },
        parse: (src) => {
            return loadSetRegistryAdmin(src.loadRef().beginParse());
        }
    }
}

export type SetOwner = {
    $$type: 'SetOwner';
    newOwner: Address;
}

export function storeSetOwner(src: SetOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3266583875, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadSetOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3266583875) { throw Error('Invalid prefix'); }
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'SetOwner' as const, newOwner: _newOwner };
}

function loadTupleSetOwner(source: TupleReader) {
    let _newOwner = source.readAddress();
    return { $$type: 'SetOwner' as const, newOwner: _newOwner };
}

function storeTupleSetOwner(source: SetOwner) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserSetOwner(): DictionaryValue<SetOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetOwner(src)).endCell());
        },
        parse: (src) => {
            return loadSetOwner(src.loadRef().beginParse());
        }
    }
}

export type SetProposalOwner = {
    $$type: 'SetProposalOwner';
    newProposalOwner: Address;
}

export function storeSetProposalOwner(src: SetProposalOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3504586358, 32);
        b_0.storeAddress(src.newProposalOwner);
    };
}

export function loadSetProposalOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3504586358) { throw Error('Invalid prefix'); }
    let _newProposalOwner = sc_0.loadAddress();
    return { $$type: 'SetProposalOwner' as const, newProposalOwner: _newProposalOwner };
}

function loadTupleSetProposalOwner(source: TupleReader) {
    let _newProposalOwner = source.readAddress();
    return { $$type: 'SetProposalOwner' as const, newProposalOwner: _newProposalOwner };
}

function storeTupleSetProposalOwner(source: SetProposalOwner) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newProposalOwner);
    return builder.build();
}

function dictValueParserSetProposalOwner(): DictionaryValue<SetProposalOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetProposalOwner(src)).endCell());
        },
        parse: (src) => {
            return loadSetProposalOwner(src.loadRef().beginParse());
        }
    }
}

export type SetFwdMsgFee = {
    $$type: 'SetFwdMsgFee';
    newFwdMsgFee: bigint;
}

export function storeSetFwdMsgFee(src: SetFwdMsgFee) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4109608450, 32);
        b_0.storeUint(src.newFwdMsgFee, 64);
    };
}

export function loadSetFwdMsgFee(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4109608450) { throw Error('Invalid prefix'); }
    let _newFwdMsgFee = sc_0.loadUintBig(64);
    return { $$type: 'SetFwdMsgFee' as const, newFwdMsgFee: _newFwdMsgFee };
}

function loadTupleSetFwdMsgFee(source: TupleReader) {
    let _newFwdMsgFee = source.readBigNumber();
    return { $$type: 'SetFwdMsgFee' as const, newFwdMsgFee: _newFwdMsgFee };
}

function storeTupleSetFwdMsgFee(source: SetFwdMsgFee) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.newFwdMsgFee);
    return builder.build();
}

function dictValueParserSetFwdMsgFee(): DictionaryValue<SetFwdMsgFee> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetFwdMsgFee(src)).endCell());
        },
        parse: (src) => {
            return loadSetFwdMsgFee(src.loadRef().beginParse());
        }
    }
}

export type SetMetadata = {
    $$type: 'SetMetadata';
    newMetadata: Address;
}

export function storeSetMetadata(src: SetMetadata) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3660550271, 32);
        b_0.storeAddress(src.newMetadata);
    };
}

export function loadSetMetadata(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3660550271) { throw Error('Invalid prefix'); }
    let _newMetadata = sc_0.loadAddress();
    return { $$type: 'SetMetadata' as const, newMetadata: _newMetadata };
}

function loadTupleSetMetadata(source: TupleReader) {
    let _newMetadata = source.readAddress();
    return { $$type: 'SetMetadata' as const, newMetadata: _newMetadata };
}

function storeTupleSetMetadata(source: SetMetadata) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newMetadata);
    return builder.build();
}

function dictValueParserSetMetadata(): DictionaryValue<SetMetadata> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetMetadata(src)).endCell());
        },
        parse: (src) => {
            return loadSetMetadata(src.loadRef().beginParse());
        }
    }
}

export type FwdMsg = {
    $$type: 'FwdMsg';
    fwdMsg: SendParameters;
}

export function storeFwdMsg(src: FwdMsg) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1690551268, 32);
        b_0.store(storeSendParameters(src.fwdMsg));
    };
}

export function loadFwdMsg(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1690551268) { throw Error('Invalid prefix'); }
    let _fwdMsg = loadSendParameters(sc_0);
    return { $$type: 'FwdMsg' as const, fwdMsg: _fwdMsg };
}

function loadTupleFwdMsg(source: TupleReader) {
    const _fwdMsg = loadTupleSendParameters(source.readTuple());
    return { $$type: 'FwdMsg' as const, fwdMsg: _fwdMsg };
}

function storeTupleFwdMsg(source: FwdMsg) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleSendParameters(source.fwdMsg));
    return builder.build();
}

function dictValueParserFwdMsg(): DictionaryValue<FwdMsg> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFwdMsg(src)).endCell());
        },
        parse: (src) => {
            return loadFwdMsg(src.loadRef().beginParse());
        }
    }
}

export type DaoInit = {
    $$type: 'DaoInit';
    owner: Address;
    proposalOwner: Address;
    metadata: Address;
}

export function storeDaoInit(src: DaoInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(444810285, 32);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.proposalOwner);
        b_0.storeAddress(src.metadata);
    };
}

export function loadDaoInit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 444810285) { throw Error('Invalid prefix'); }
    let _owner = sc_0.loadAddress();
    let _proposalOwner = sc_0.loadAddress();
    let _metadata = sc_0.loadAddress();
    return { $$type: 'DaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function loadTupleDaoInit(source: TupleReader) {
    let _owner = source.readAddress();
    let _proposalOwner = source.readAddress();
    let _metadata = source.readAddress();
    return { $$type: 'DaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata };
}

function storeTupleDaoInit(source: DaoInit) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.proposalOwner);
    builder.writeAddress(source.metadata);
    return builder.build();
}

function dictValueParserDaoInit(): DictionaryValue<DaoInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDaoInit(src)).endCell());
        },
        parse: (src) => {
            return loadDaoInit(src.loadRef().beginParse());
        }
    }
}

export type CreateProposal = {
    $$type: 'CreateProposal';
    body: Params;
}

export function storeCreateProposal(src: CreateProposal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(716721105, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadCreateProposal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 716721105) { throw Error('Invalid prefix'); }
    let _body = loadParams(sc_0);
    return { $$type: 'CreateProposal' as const, body: _body };
}

function loadTupleCreateProposal(source: TupleReader) {
    const _body = loadTupleParams(source.readTuple());
    return { $$type: 'CreateProposal' as const, body: _body };
}

function storeTupleCreateProposal(source: CreateProposal) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

function dictValueParserCreateProposal(): DictionaryValue<CreateProposal> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCreateProposal(src)).endCell());
        },
        parse: (src) => {
            return loadCreateProposal(src.loadRef().beginParse());
        }
    }
}

export type SendProposalInit = {
    $$type: 'SendProposalInit';
    body: Params;
}

export function storeSendProposalInit(src: SendProposalInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3598355482, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadSendProposalInit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3598355482) { throw Error('Invalid prefix'); }
    let _body = loadParams(sc_0);
    return { $$type: 'SendProposalInit' as const, body: _body };
}

function loadTupleSendProposalInit(source: TupleReader) {
    const _body = loadTupleParams(source.readTuple());
    return { $$type: 'SendProposalInit' as const, body: _body };
}

function storeTupleSendProposalInit(source: SendProposalInit) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

function dictValueParserSendProposalInit(): DictionaryValue<SendProposalInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendProposalInit(src)).endCell());
        },
        parse: (src) => {
            return loadSendProposalInit(src.loadRef().beginParse());
        }
    }
}

export type Params = {
    $$type: 'Params';
    proposalStartTime: bigint;
    proposalEndTime: bigint;
    proposalSnapshotTime: bigint;
    votingSystem: string;
    votingPowerStrategies: string;
    title: string;
    description: string;
}

export function storeParams(src: Params) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.proposalStartTime, 64);
        b_0.storeUint(src.proposalEndTime, 64);
        b_0.storeUint(src.proposalSnapshotTime, 64);
        b_0.storeStringRefTail(src.votingSystem);
        b_0.storeStringRefTail(src.votingPowerStrategies);
        b_0.storeStringRefTail(src.title);
        let b_1 = new Builder();
        b_1.storeStringRefTail(src.description);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadParams(slice: Slice) {
    let sc_0 = slice;
    let _proposalStartTime = sc_0.loadUintBig(64);
    let _proposalEndTime = sc_0.loadUintBig(64);
    let _proposalSnapshotTime = sc_0.loadUintBig(64);
    let _votingSystem = sc_0.loadStringRefTail();
    let _votingPowerStrategies = sc_0.loadStringRefTail();
    let _title = sc_0.loadStringRefTail();
    let sc_1 = sc_0.loadRef().beginParse();
    let _description = sc_1.loadStringRefTail();
    return { $$type: 'Params' as const, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description };
}

function loadTupleParams(source: TupleReader) {
    let _proposalStartTime = source.readBigNumber();
    let _proposalEndTime = source.readBigNumber();
    let _proposalSnapshotTime = source.readBigNumber();
    let _votingSystem = source.readString();
    let _votingPowerStrategies = source.readString();
    let _title = source.readString();
    let _description = source.readString();
    return { $$type: 'Params' as const, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description };
}

function storeTupleParams(source: Params) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.proposalStartTime);
    builder.writeNumber(source.proposalEndTime);
    builder.writeNumber(source.proposalSnapshotTime);
    builder.writeString(source.votingSystem);
    builder.writeString(source.votingPowerStrategies);
    builder.writeString(source.title);
    builder.writeString(source.description);
    return builder.build();
}

function dictValueParserParams(): DictionaryValue<Params> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeParams(src)).endCell());
        },
        parse: (src) => {
            return loadParams(src.loadRef().beginParse());
        }
    }
}

export type ProposalInit = {
    $$type: 'ProposalInit';
    body: Params;
}

export function storeProposalInit(src: ProposalInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4087233874, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadProposalInit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4087233874) { throw Error('Invalid prefix'); }
    let _body = loadParams(sc_0);
    return { $$type: 'ProposalInit' as const, body: _body };
}

function loadTupleProposalInit(source: TupleReader) {
    const _body = loadTupleParams(source.readTuple());
    return { $$type: 'ProposalInit' as const, body: _body };
}

function storeTupleProposalInit(source: ProposalInit) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

function dictValueParserProposalInit(): DictionaryValue<ProposalInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeProposalInit(src)).endCell());
        },
        parse: (src) => {
            return loadProposalInit(src.loadRef().beginParse());
        }
    }
}

 type Dao_init_args = {
    $$type: 'Dao_init_args';
    registry: Address;
    daoIndex: bigint;
}

function initDao_init_args(src: Dao_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.registry);
        b_0.storeInt(src.daoIndex, 257);
    };
}

async function Dao_init(registry: Address, daoIndex: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initDao_init_args({ $$type: 'Dao_init_args', registry, daoIndex })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Dao_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    2977: { message: `Already initialized` },
    4429: { message: `Invalid sender` },
    23452: { message: `Only admin can set new registry admin` },
    46336: { message: `Below min fee for create dao` },
    51893: { message: `Only registry can change fwd msg fee` },
    52512: { message: `Only admin can set dao fwd msg fee` },
    60173: { message: `Below min fee for dao forward message` },
    62925: { message: `Only admin can set create dao fee` },
}

const Dao_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CreateDao","header":446717501,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SendDaoInit","header":3367586747,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetCreateDaoFee","header":3466008403,"fields":[{"name":"newCreateDaoFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SendToDaoSetFwdMsgFee","header":1477819782,"fields":[{"name":"daoId","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"newFwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SetRegistryAdmin","header":3335943114,"fields":[{"name":"newAdmin","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetOwner","header":3266583875,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetProposalOwner","header":3504586358,"fields":[{"name":"newProposalOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetFwdMsgFee","header":4109608450,"fields":[{"name":"newFwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SetMetadata","header":3660550271,"fields":[{"name":"newMetadata","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"FwdMsg","header":1690551268,"fields":[{"name":"fwdMsg","type":{"kind":"simple","type":"SendParameters","optional":false}}]},
    {"name":"DaoInit","header":444810285,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CreateProposal","header":716721105,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"SendProposalInit","header":3598355482,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"Params","header":null,"fields":[{"name":"proposalStartTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalEndTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalSnapshotTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"votingSystem","type":{"kind":"simple","type":"string","optional":false}},{"name":"votingPowerStrategies","type":{"kind":"simple","type":"string","optional":false}},{"name":"title","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"ProposalInit","header":4087233874,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
]

const Dao_getters: ABIGetter[] = [
    {"name":"registry","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"proposalOwner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"metadata","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"daoIndex","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"fwdMsgFee","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Dao_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"DaoInit"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetOwner"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetProposalOwner"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetMetadata"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetFwdMsgFee"}},
    {"receiver":"internal","message":{"kind":"typed","type":"FwdMsg"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Dao implements Contract {
    
    static async init(registry: Address, daoIndex: bigint) {
        return await Dao_init(registry, daoIndex);
    }
    
    static async fromInit(registry: Address, daoIndex: bigint) {
        const init = await Dao_init(registry, daoIndex);
        const address = contractAddress(0, init);
        return new Dao(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Dao(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Dao_types,
        getters: Dao_getters,
        receivers: Dao_receivers,
        errors: Dao_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: DaoInit | SetOwner | SetProposalOwner | SetMetadata | SetFwdMsgFee | FwdMsg | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DaoInit') {
            body = beginCell().store(storeDaoInit(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetOwner') {
            body = beginCell().store(storeSetOwner(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetProposalOwner') {
            body = beginCell().store(storeSetProposalOwner(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetMetadata') {
            body = beginCell().store(storeSetMetadata(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetFwdMsgFee') {
            body = beginCell().store(storeSetFwdMsgFee(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'FwdMsg') {
            body = beginCell().store(storeFwdMsg(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getRegistry(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('registry', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getProposalOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('proposalOwner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getMetadata(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('metadata', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getDaoIndex(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('daoIndex', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getFwdMsgFee(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('fwdMsgFee', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}