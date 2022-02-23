/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_custom_options.proto (package protobuf_unittest, syntax proto2)

import {MethodKind, proto2} from "@bufbuild/protobuf";
import {AggregateMessage, CustomOptionFooRequest, CustomOptionFooResponse} from "./unittest_custom_options_pb.js";

// ## Service TestServiceWithCustomOptions
// Generated from service protobuf_unittest.TestServiceWithCustomOptions
export const TestServiceWithCustomOptions = proto2.makeServiceType({
    typeName: "protobuf_unittest.TestServiceWithCustomOptions",
    methods: {
        foo: {
            name: "Foo",
            I: CustomOptionFooRequest,
            O: CustomOptionFooResponse,
            kind: MethodKind.Unary,
        },
    }
});

// ## Service AggregateService
// Generated from service protobuf_unittest.AggregateService
export const AggregateService = proto2.makeServiceType({
    typeName: "protobuf_unittest.AggregateService",
    methods: {
        method: {
            name: "Method",
            I: AggregateMessage,
            O: AggregateMessage,
            kind: MethodKind.Unary,
        },
    }
});
