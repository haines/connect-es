/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/push.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import {MethodKind, proto3} from "@bufbuild/protobuf";
import {PushRequest, PushResponse} from "./push_pb.js";

// ## Service PushService
// Generated from service buf.alpha.registry.v1alpha1.PushService
export const PushService = proto3.makeServiceType({
    typeName: "buf.alpha.registry.v1alpha1.PushService",
    methods: {
        push: {
            name: "Push",
            I: PushRequest,
            O: PushResponse,
            kind: MethodKind.Unary,
        },
    }
});
