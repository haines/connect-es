/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file extra/service-example.proto (package spec, syntax proto3)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum spec.FailRequest
 */
export enum FailRequest {

    /**
     * @generated from enum value: FAIL_REQUEST_NONE = 0;
     */
    FAIL_REQUEST_NONE = 0,

    /**
     * @generated from enum value: MESSAGE_THEN_ERROR_STATUS = 1;
     */
    MESSAGE_THEN_ERROR_STATUS = 1,

    /**
     * @generated from enum value: ERROR_STATUS_ONLY = 2;
     */
    ERROR_STATUS_ONLY = 2,

}

// Retrieve enum metadata with: proto3.getEnumType(FailRequest)
proto3.util.setEnumType(FailRequest, "spec.FailRequest", [
    {no: 0, name: "FAIL_REQUEST_NONE"},
    {no: 1, name: "MESSAGE_THEN_ERROR_STATUS"},
    {no: 2, name: "ERROR_STATUS_ONLY"},
]);

/**
 * @generated from message spec.ExampleRequest
 */
export class ExampleRequest extends Message<ExampleRequest> {

    /**
     * @generated from field: string question = 1;
     */
    question = "";

    /**
     * @generated from field: spec.FailRequest please_fail = 2;
     */
    pleaseFail = FailRequest.FAIL_REQUEST_NONE;

    /**
     * @generated from field: int32 please_delay_response_ms = 3;
     */
    pleaseDelayResponseMs = 0;

    /**
     * @generated from field: bool disable_sending_example_response_headers = 4;
     */
    disableSendingExampleResponseHeaders = false;

    constructor(data?: PartialMessage<ExampleRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "spec.ExampleRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "please_fail", kind: "enum", T: proto3.getEnumType(FailRequest)},
        {no: 3, name: "please_delay_response_ms", kind: "scalar", T: 5 /* ScalarType.INT32 */},
        {no: 4, name: "disable_sending_example_response_headers", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExampleRequest {
        return new ExampleRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExampleRequest {
        return new ExampleRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExampleRequest {
        return new ExampleRequest().fromJsonString(jsonString, options);
    }

    static equals(a: ExampleRequest | PlainMessage<ExampleRequest> | undefined, b: ExampleRequest | PlainMessage<ExampleRequest> | undefined): boolean {
        return proto3.util.equals(ExampleRequest, a, b);
    }

}


/**
 * @generated from message spec.ExampleResponse
 */
export class ExampleResponse extends Message<ExampleResponse> {

    /**
     * @generated from field: string answer = 1;
     */
    answer = "";

    /**
     * @generated from field: map<string, string> your_request_headers = 2;
     */
    yourRequestHeaders: { [key: string]: string } = {};

    /**
     * @generated from field: string your_deadline = 3;
     */
    yourDeadline = "";

    /**
     * @generated from field: spec.FailRequest your_fail_request = 4;
     */
    yourFailRequest = FailRequest.FAIL_REQUEST_NONE;

    constructor(data?: PartialMessage<ExampleResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "spec.ExampleResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "answer", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "your_request_headers", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.0 */}},
        {no: 3, name: "your_deadline", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "your_fail_request", kind: "enum", T: proto3.getEnumType(FailRequest)},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExampleResponse {
        return new ExampleResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExampleResponse {
        return new ExampleResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExampleResponse {
        return new ExampleResponse().fromJsonString(jsonString, options);
    }

    static equals(a: ExampleResponse | PlainMessage<ExampleResponse> | undefined, b: ExampleResponse | PlainMessage<ExampleResponse> | undefined): boolean {
        return proto3.util.equals(ExampleResponse, a, b);
    }

}


