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
import { Api } from './models'

type FromJsonFunction<T> = (name: string, value: any) => T
type MapOf<T> = { [name: string]: T }

/**
 * A conditional type to convert an interface model to the equivalent JSON model.
 * We may represent dates as Date objects in our object model, but we must translate
 * them to strings for the JSON model.
 */
type ToJson<T> =
	T extends Date ? string
	: T extends object ? {
		[P in keyof T]: ToJson<T[P]>
	}
	: T extends (infer R)[] ? ToJson<R>[]
	: T

export function arrayFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return function(name: string, value: any) {
		if (typeof value !== 'object' || typeof value.length !== 'number') {
			throw `Invalid type for ${name}: expected array got ${typeof value}`
		}
	
		const result: T[] = []
		for (const el of value) {
			result.push(next(name, el))
		}
		return result
	}
}

export function arrayToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return arrayFromJson(next)
}

export function mapFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return function(name: string, value: any) {
		if (typeof value !== 'object') {
			throw `Invalid type for ${name}: expected object got ${typeof value}`
		}
	
		const result: MapOf<T> = {}
		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				result[key] = next(name, value[key])
			}
		}
		return result
	}
}

export function mapToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return mapFromJson(next)
}

export function allowNull<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		return next(name, value)
	}
}

export function allowUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | undefined> {
	return function(name: string, value: any) {
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function allowNullOrUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null | undefined> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function unsupportedFromJson(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid type for ${name}: expected unknown got undefined`
	}
	return value
}

export function unsupportedToJson(name: string, value: unknown): any {
	return unsupportedFromJson(name, value)
}

export function parseUnsupported(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected unknown got undefined`
	}
	return value
}

export function booleanFromJson(name: string, value: any): boolean {
	if (typeof value !== 'boolean') {
		throw `Invalid type for ${name}: expected boolean got ${typeof value}`
	}
	return value
}

export function booleanToJson(name: string, value: boolean): any {
	return booleanFromJson(name, value)
}

export function parseBoolean(name: string, value: any): boolean {
	if (value === 'true') {
		return true
	} else if (value === 'false') {
		return false
	} else {
		throw `Invalid value for ${name}: expected boolean got "${value}"`
	}
}

export function stringFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return value
}

export function stringToJson(name: string, value: string): any {
	return stringFromJson(name, value)
}

export function binaryFromJson(name: string, value: any): Buffer {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return new Buffer(value, 'base64')
}

export function binaryToJson(name: string, value: string | Buffer): string {
	if (typeof value === 'string') {
		return value
	} else {
		return value.toString('base64')
	}
}

export function parseString(name: string, value: any): string {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected string got undefined`
	}
	if (typeof value === 'string') {
		return value
	}
	if (typeof value === 'object' && typeof value.length === 'number') {
		if (value.length > 0) {
			return value[0]
		}
	}

	throw `Invalid value for ${name}: expected string got ${typeof value}`
}

export function integerFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	if (Math.floor(value) !== value) {
		throw `Invalid value for ${name}: expected integer got "${value}"`
	}
	return value
}

export function integerToJson(name: string, value: number): any {
	return integerFromJson(name, value)
}

export function parseInteger(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		if (value.indexOf('.') !== -1) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}

		const result = parseInt(value, 10)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected integer got ${typeof value}`
}

export function numberFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	return value
}

export function numberToJson(name: string, value: number): any {
	return numberFromJson(name, value)
}

export function parseNumber(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		const result = parseFloat(value)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected float got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected number got ${typeof value}`
}

export function dateFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
		throw `Invalid value for ${name}: expected valid date string got "${value}"`
	}
	return value
}

export function parseDate(name: string, value: any): string {
	return dateFromJson(name, value)
}

export function dateToJson(name: string, value: string): string {
	return dateFromJson(name, value)
}

export function dateTimeFromJson(name: string, value: any): Date {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?(Z|(\+|-)[0-9]{2}(:?[0-9]{2})?)$/)) {
		throw `Invalid value for ${name}: expected valid datetime string got "${value}"`
	}
	return new Date(value)
}

export function parseDateTime(name: string, value: any): Date {
	return dateTimeFromJson(name, value)
}

export function dateTimeToJson(name: string, value: Date): string {
	if (typeof value !== 'object' || typeof value.toISOString !== 'function') {
		throw `Invalid type for ${name}: expected Date got ${typeof value}`
	}
	return value.toISOString()
}

export function timeFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?$/)) {
		throw `Invalid value for ${name}: expected valid time string got "${value}"`
	}
	return value
}

export function parseTime(name: string, value: any): string {
	return timeFromJson(name, value)
}

export function timeToJson(name: string, value: string): string {
	return timeFromJson(name, value)
}

/* Model conversion functions */

export function enumApiDirectionParamEnumFromJson(name: string, value: any): Api.DirectionParamEnum {
	if (typeof value !== 'string' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}

	if (value === 'asc') {
		return Api.DirectionParamEnum.Asc
	}
	if (value === 'desc') {
		return Api.DirectionParamEnum.Desc
	}

	throw `Unexpected enum value for Api.DirectionParamEnum: ${value}`
}

export function enumApiDirectionParamEnumToJson(name: string, value: Api.DirectionParamEnum): Api.DirectionParamEnum {
	if (typeof value !== 'string' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}

	if (value === 'asc') {
		return Api.DirectionParamEnum.Asc
	}
	if (value === 'desc') {
		return Api.DirectionParamEnum.Desc
	}

	throw `Unexpected enum value for Api.DirectionParamEnum: ${value}`
}

const ApiGoalsDtoKeys: string[] = ['createdAt', 'goalId', 'goalName', 'goalPriority', 'goalStartDate', 'goalTargetDate', 'isExist', 'patientId', 'planId']

function modelApiGoalsDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.GoalsDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiGoalsDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.GoalsDto = {
		'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
		'goalId': allowUndefined(stringFromJson)(`${name}.goalId`, value['goalId']),
		'goalName': allowUndefined(stringFromJson)(`${name}.goalName`, value['goalName']),
		'goalPriority': allowUndefined(stringFromJson)(`${name}.goalPriority`, value['goalPriority']),
		'goalStartDate': allowUndefined(stringFromJson)(`${name}.goalStartDate`, value['goalStartDate']),
		'goalTargetDate': allowUndefined(stringFromJson)(`${name}.goalTargetDate`, value['goalTargetDate']),
		'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
		'patientId': allowUndefined(stringFromJson)(`${name}.patientId`, value['patientId']),
		'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
	}

	return result
}

function modelApiGoalsDtoToJsonContent(name: string, value: Api.GoalsDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.GoalsDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiGoalsDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.GoalsDto> = {
		'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
		'goalId': allowUndefined(stringToJson)(`${name}.goalId`, value['goalId']),
		'goalName': allowUndefined(stringToJson)(`${name}.goalName`, value['goalName']),
		'goalPriority': allowUndefined(stringToJson)(`${name}.goalPriority`, value['goalPriority']),
		'goalStartDate': allowUndefined(stringToJson)(`${name}.goalStartDate`, value['goalStartDate']),
		'goalTargetDate': allowUndefined(stringToJson)(`${name}.goalTargetDate`, value['goalTargetDate']),
		'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
		'patientId': allowUndefined(stringToJson)(`${name}.patientId`, value['patientId']),
		'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
	}

	return result
}

export function modelApiGoalsDtoFromJson(name: string, value: any): Api.GoalsDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.GoalsDto = modelApiGoalsDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.GoalsDto: ${key}`)
		}
	}

	return result
}

export function modelApiGoalsDtoToJson(name: string, value: Api.GoalsDto): ToJson<Api.GoalsDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.GoalsDto> = modelApiGoalsDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.GoalsDto: ${key}`)
		}
	}

	return result
}

const ApiGoalsPagedResultDtoKeys: string[] = ['totalCount', 'items']

function modelApiGoalsPagedResultDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.GoalsPagedResultDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiGoalsPagedResultDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.GoalsPagedResultDto = {
		'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayFromJson(modelApiGoalsDtoFromJson))(`${name}.items`, value['items']),
	}

	return result
}

function modelApiGoalsPagedResultDtoToJsonContent(name: string, value: Api.GoalsPagedResultDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.GoalsPagedResultDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiGoalsPagedResultDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.GoalsPagedResultDto> = {
		'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayToJson(modelApiGoalsDtoToJson))(`${name}.items`, value['items']),
	}

	return result
}

export function modelApiGoalsPagedResultDtoFromJson(name: string, value: any): Api.GoalsPagedResultDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.GoalsPagedResultDto = modelApiGoalsPagedResultDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.GoalsPagedResultDto: ${key}`)
		}
	}

	return result
}

export function modelApiGoalsPagedResultDtoToJson(name: string, value: Api.GoalsPagedResultDto): ToJson<Api.GoalsPagedResultDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.GoalsPagedResultDto> = modelApiGoalsPagedResultDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.GoalsPagedResultDto: ${key}`)
		}
	}

	return result
}

const ApiMessageDtoKeys: string[] = ['message']

function modelApiMessageDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.MessageDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiMessageDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.MessageDto = {
		'message': stringFromJson(`${name}.message`, value['message']),
	}

	return result
}

function modelApiMessageDtoToJsonContent(name: string, value: Api.MessageDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.MessageDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiMessageDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.MessageDto> = {
		'message': stringToJson(`${name}.message`, value['message']),
	}

	return result
}

export function modelApiMessageDtoFromJson(name: string, value: any): Api.MessageDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.MessageDto = modelApiMessageDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.MessageDto: ${key}`)
		}
	}

	return result
}

export function modelApiMessageDtoToJson(name: string, value: Api.MessageDto): ToJson<Api.MessageDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.MessageDto> = modelApiMessageDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.MessageDto: ${key}`)
		}
	}

	return result
}

const ApiPlansDtoKeys: string[] = ['careplanNumber', 'createdAt', 'dueDate', 'isExist', 'patientId', 'planName', 'planId', 'priority', 'startDate', 'status', 'taskCreator']

function modelApiPlansDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.PlansDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiPlansDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.PlansDto = {
		'careplanNumber': allowUndefined(numberFromJson)(`${name}.careplanNumber`, value['careplanNumber']),
		'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
		'dueDate': allowUndefined(stringFromJson)(`${name}.dueDate`, value['dueDate']),
		'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
		'patientId': allowUndefined(stringFromJson)(`${name}.patientId`, value['patientId']),
		'planName': allowUndefined(stringFromJson)(`${name}.planName`, value['planName']),
		'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
		'priority': allowUndefined(stringFromJson)(`${name}.priority`, value['priority']),
		'startDate': allowUndefined(stringFromJson)(`${name}.startDate`, value['startDate']),
		'status': allowUndefined(stringFromJson)(`${name}.status`, value['status']),
		'taskCreator': allowUndefined(stringFromJson)(`${name}.taskCreator`, value['taskCreator']),
	}

	return result
}

function modelApiPlansDtoToJsonContent(name: string, value: Api.PlansDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.PlansDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiPlansDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.PlansDto> = {
		'careplanNumber': allowUndefined(numberToJson)(`${name}.careplanNumber`, value['careplanNumber']),
		'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
		'dueDate': allowUndefined(stringToJson)(`${name}.dueDate`, value['dueDate']),
		'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
		'patientId': allowUndefined(stringToJson)(`${name}.patientId`, value['patientId']),
		'planName': allowUndefined(stringToJson)(`${name}.planName`, value['planName']),
		'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
		'priority': allowUndefined(stringToJson)(`${name}.priority`, value['priority']),
		'startDate': allowUndefined(stringToJson)(`${name}.startDate`, value['startDate']),
		'status': allowUndefined(stringToJson)(`${name}.status`, value['status']),
		'taskCreator': allowUndefined(stringToJson)(`${name}.taskCreator`, value['taskCreator']),
	}

	return result
}

export function modelApiPlansDtoFromJson(name: string, value: any): Api.PlansDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.PlansDto = modelApiPlansDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.PlansDto: ${key}`)
		}
	}

	return result
}

export function modelApiPlansDtoToJson(name: string, value: Api.PlansDto): ToJson<Api.PlansDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.PlansDto> = modelApiPlansDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.PlansDto: ${key}`)
		}
	}

	return result
}

const ApiPlansPagedResultDtoKeys: string[] = ['totalCount', 'items']

function modelApiPlansPagedResultDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.PlansPagedResultDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiPlansPagedResultDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.PlansPagedResultDto = {
		'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayFromJson(modelApiPlansDtoFromJson))(`${name}.items`, value['items']),
	}

	return result
}

function modelApiPlansPagedResultDtoToJsonContent(name: string, value: Api.PlansPagedResultDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.PlansPagedResultDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiPlansPagedResultDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.PlansPagedResultDto> = {
		'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayToJson(modelApiPlansDtoToJson))(`${name}.items`, value['items']),
	}

	return result
}

export function modelApiPlansPagedResultDtoFromJson(name: string, value: any): Api.PlansPagedResultDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.PlansPagedResultDto = modelApiPlansPagedResultDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.PlansPagedResultDto: ${key}`)
		}
	}

	return result
}

export function modelApiPlansPagedResultDtoToJson(name: string, value: Api.PlansPagedResultDto): ToJson<Api.PlansPagedResultDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.PlansPagedResultDto> = modelApiPlansPagedResultDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.PlansPagedResultDto: ${key}`)
		}
	}

	return result
}

const ApiTasksDtoKeys: string[] = ['assigneeTask', 'createdAt', 'descriptionTask', 'goalId', 'isExist', 'planId', 'priorityTask', 'statusTask', 'subjectTask', 'targetDateTask', 'taskid', 'typeTask', 'valueTask']

function modelApiTasksDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.TasksDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiTasksDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.TasksDto = {
		'assigneeTask': allowUndefined(stringFromJson)(`${name}.assigneeTask`, value['assigneeTask']),
		'createdAt': allowUndefined(stringFromJson)(`${name}.createdAt`, value['createdAt']),
		'descriptionTask': allowUndefined(stringFromJson)(`${name}.descriptionTask`, value['descriptionTask']),
		'goalId': allowUndefined(stringFromJson)(`${name}.goalId`, value['goalId']),
		'isExist': allowUndefined(booleanFromJson)(`${name}.isExist`, value['isExist']),
		'planId': allowUndefined(stringFromJson)(`${name}.planId`, value['planId']),
		'priorityTask': allowUndefined(stringFromJson)(`${name}.priorityTask`, value['priorityTask']),
		'statusTask': allowUndefined(stringFromJson)(`${name}.statusTask`, value['statusTask']),
		'subjectTask': allowUndefined(stringFromJson)(`${name}.subjectTask`, value['subjectTask']),
		'targetDateTask': allowUndefined(stringFromJson)(`${name}.targetDateTask`, value['targetDateTask']),
		'taskid': allowUndefined(stringFromJson)(`${name}.taskid`, value['taskid']),
		'typeTask': allowUndefined(stringFromJson)(`${name}.typeTask`, value['typeTask']),
		'valueTask': allowUndefined(stringFromJson)(`${name}.valueTask`, value['valueTask']),
	}

	return result
}

function modelApiTasksDtoToJsonContent(name: string, value: Api.TasksDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.TasksDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiTasksDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.TasksDto> = {
		'assigneeTask': allowUndefined(stringToJson)(`${name}.assigneeTask`, value['assigneeTask']),
		'createdAt': allowUndefined(stringToJson)(`${name}.createdAt`, value['createdAt']),
		'descriptionTask': allowUndefined(stringToJson)(`${name}.descriptionTask`, value['descriptionTask']),
		'goalId': allowUndefined(stringToJson)(`${name}.goalId`, value['goalId']),
		'isExist': allowUndefined(booleanToJson)(`${name}.isExist`, value['isExist']),
		'planId': allowUndefined(stringToJson)(`${name}.planId`, value['planId']),
		'priorityTask': allowUndefined(stringToJson)(`${name}.priorityTask`, value['priorityTask']),
		'statusTask': allowUndefined(stringToJson)(`${name}.statusTask`, value['statusTask']),
		'subjectTask': allowUndefined(stringToJson)(`${name}.subjectTask`, value['subjectTask']),
		'targetDateTask': allowUndefined(stringToJson)(`${name}.targetDateTask`, value['targetDateTask']),
		'taskid': allowUndefined(stringToJson)(`${name}.taskid`, value['taskid']),
		'typeTask': allowUndefined(stringToJson)(`${name}.typeTask`, value['typeTask']),
		'valueTask': allowUndefined(stringToJson)(`${name}.valueTask`, value['valueTask']),
	}

	return result
}

export function modelApiTasksDtoFromJson(name: string, value: any): Api.TasksDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.TasksDto = modelApiTasksDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.TasksDto: ${key}`)
		}
	}

	return result
}

export function modelApiTasksDtoToJson(name: string, value: Api.TasksDto): ToJson<Api.TasksDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.TasksDto> = modelApiTasksDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.TasksDto: ${key}`)
		}
	}

	return result
}

const ApiTasksPagedResultDtoKeys: string[] = ['totalCount', 'items']

function modelApiTasksPagedResultDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.TasksPagedResultDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiTasksPagedResultDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.TasksPagedResultDto = {
		'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayFromJson(modelApiTasksDtoFromJson))(`${name}.items`, value['items']),
	}

	return result
}

function modelApiTasksPagedResultDtoToJsonContent(name: string, value: Api.TasksPagedResultDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.TasksPagedResultDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiTasksPagedResultDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.TasksPagedResultDto> = {
		'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayToJson(modelApiTasksDtoToJson))(`${name}.items`, value['items']),
	}

	return result
}

export function modelApiTasksPagedResultDtoFromJson(name: string, value: any): Api.TasksPagedResultDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.TasksPagedResultDto = modelApiTasksPagedResultDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.TasksPagedResultDto: ${key}`)
		}
	}

	return result
}

export function modelApiTasksPagedResultDtoToJson(name: string, value: Api.TasksPagedResultDto): ToJson<Api.TasksPagedResultDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.TasksPagedResultDto> = modelApiTasksPagedResultDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.TasksPagedResultDto: ${key}`)
		}
	}

	return result
}
