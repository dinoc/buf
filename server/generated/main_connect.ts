// @generated by protoc-gen-connect-es v0.13.2 with parameter "target=ts"
// @generated from file main.proto (package mypackage, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CurrentUser, Empty } from "./main_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service mypackage.AppService
 */
export const AppService = {
  typeName: "mypackage.AppService",
  methods: {
    /**
     * @generated from rpc mypackage.AppService.GetCurrentUser
     */
    getCurrentUser: {
      name: "GetCurrentUser",
      I: Empty,
      O: CurrentUser,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mypackage.AppService.UpsertUser
     */
    upsertUser: {
      name: "UpsertUser",
      I: CurrentUser,
      O: CurrentUser,
      kind: MethodKind.Unary,
    },
  }
} as const;

