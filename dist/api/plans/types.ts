/* eslint-disable */
// tslint:disable
/**
 * careplan service
 * 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface PlansApi {
	postPlansCreate: (request: Api.PlansDto | undefined) => Promise<PostPlansCreateResponse>
	getPlansDelete: (id: string) => Promise<GetPlansDeleteResponse>
	getPlansGet: (id: string) => Promise<GetPlansGetResponse>
	getPlansGetAll: (limit: number | null | undefined, direction: Api.DirectionParamEnum | undefined, sortByField: string | null | undefined) => Promise<GetPlansGetAllResponse>
	putPlansUpdate: (request: Api.PlansDto | undefined) => Promise<PutPlansUpdateResponse>
}

export type PostPlansCreateResponse = PostPlansCreate201Response | PostPlansCreate401Response | PostPlansCreate404Response | PostPlansCreate422Response

export interface PostPlansCreate201Response {
	status: 201
	body: Api.PlansDto
	headers?: never
}

export interface PostPlansCreate401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PostPlansCreate404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface PostPlansCreate422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetPlansDeleteResponse = GetPlansDelete200Response | GetPlansDelete401Response | GetPlansDelete404Response | GetPlansDelete422Response

export interface GetPlansDelete200Response {
	status: 200
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansDelete401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansDelete404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansDelete422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetPlansGetResponse = GetPlansGet200Response | GetPlansGet401Response | GetPlansGet404Response | GetPlansGet422Response

export interface GetPlansGet200Response {
	status: 200
	body: Api.PlansDto
	headers?: never
}

export interface GetPlansGet401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansGet404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansGet422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetPlansGetAllResponse = GetPlansGetAll200Response | GetPlansGetAll401Response | GetPlansGetAll404Response

export interface GetPlansGetAll200Response {
	status: 200
	body: Api.PlansPagedResultDto
	headers?: never
}

export interface GetPlansGetAll401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetPlansGetAll404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export type PutPlansUpdateResponse = PutPlansUpdate200Response | PutPlansUpdate401Response | PutPlansUpdate404Response | PutPlansUpdate422Response

export interface PutPlansUpdate200Response {
	status: 200
	body: Api.PlansDto
	headers?: never
}

export interface PutPlansUpdate401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PutPlansUpdate404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface PutPlansUpdate422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

