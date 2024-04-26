// src/error/flatten/flatten.ts
function flatten(arg1) {
    return (Array.isArray(arg1) ? arg1 : arg1.issues).reduce(
        (flatErrors, issue) => {
            if (issue.path) {
                if (issue.path.every(({ key }) => typeof key === 'string' || typeof key === 'number')) {
                    const path = issue.path.map(({ key }) => key).join('.');
                    if (flatErrors.nested[path]) {
                        flatErrors.nested[path].push(issue.message);
                    } else {
                        flatErrors.nested[path] = [issue.message];
                    }
                }
            } else {
                if (flatErrors.root) {
                    flatErrors.root.push(issue.message);
                } else {
                    flatErrors.root = [issue.message];
                }
            }
            return flatErrors;
        },
        { nested: {} }
    );
}

// src/error/ValiError/ValiError.ts
var ValiError = class extends Error {
    issues;
    /**
     * Creates a Valibot error with useful information.
     *
     * @param issues The error issues.
     */
    constructor(issues) {
        super(issues[0].message);
        this.name = 'ValiError';
        this.issues = issues;
    }
};

// src/methods/brand/brand.ts
var BrandSymbol = Symbol('brand');
function brand(schema, name) {
    return schema;
}

// src/methods/coerce/coerce.ts
function coerce(schema, action) {
    return {
        ...schema,
        _parse(input, config) {
            return schema._parse(action(input), config);
        },
    };
}

// src/methods/coerce/coerceAsync.ts
function coerceAsync(schema, action) {
    return {
        ...schema,
        async _parse(input, config) {
            return schema._parse(await action(input), config);
        },
    };
}

// src/utils/actionIssue/actionIssue.ts
function actionIssue(context, reference, input, label, received) {
    return {
        issues: [{ context, reference, input, label, received }],
    };
}

// src/utils/actionOutput/actionOutput.ts
function actionOutput(output) {
    return { output };
}

// src/utils/defaultArgs/defaultArgs.ts
function defaultArgs(arg1, arg2) {
    return Array.isArray(arg1) ? [void 0, arg1] : [arg1, arg2];
}

// src/storages/globalConfig/globalConfig.ts
var store;
function setGlobalConfig(config) {
    store = { ...store, ...config };
}
function getGlobalConfig(config) {
    return {
        lang: config?.lang ?? store?.lang,
        message: config?.message,
        abortEarly: config?.abortEarly ?? store?.abortEarly,
        abortPipeEarly: config?.abortPipeEarly ?? store?.abortPipeEarly,
        skipPipe: config?.skipPipe ?? store?.skipPipe,
    };
}
function deleteGlobalConfig() {
    store = void 0;
}

// src/storages/globalMessage/globalMessage.ts
var store2;
function setGlobalMessage(message, lang) {
    if (!store2) store2 = /* @__PURE__ */ new Map();
    store2.set(lang, message);
}
function getGlobalMessage(lang) {
    return store2?.get(lang);
}
function deleteGlobalMessage(lang) {
    store2?.delete(lang);
}

// src/storages/schemaMessage/schemaMessage.ts
var store3;
function setSchemaMessage(message, lang) {
    if (!store3) store3 = /* @__PURE__ */ new Map();
    store3.set(lang, message);
}
function getSchemaMessage(lang) {
    return store3?.get(lang);
}
function deleteSchemaMessage(lang) {
    store3?.delete(lang);
}

// src/storages/specificMessage/specificMessage.ts
var store4;
function setSpecificMessage(reference, message, lang) {
    if (!store4) store4 = /* @__PURE__ */ new Map();
    if (!store4.get(reference)) store4.set(reference, /* @__PURE__ */ new Map());
    store4.get(reference).set(lang, message);
}
function getSpecificMessage(reference, lang) {
    return store4?.get(reference)?.get(lang);
}
function deleteSpecificMessage(reference, lang) {
    store4?.get(reference)?.delete(lang);
}

// src/utils/i18n/i18n.ts
function i18n(schema, context, reference, config, issue) {
    const message =
        context.message ??
        getSpecificMessage(reference, issue.lang) ??
        (schema ? getSchemaMessage(issue.lang) : null) ??
        config?.message ??
        getGlobalMessage(issue.lang) ??
        issue.message;
    return typeof message === 'function' ? message(issue) : message;
}

// src/utils/isLuhnAlgo/isLuhnAlgo.ts
var NON_DIGIT_REGEX = /\D/gu;
function isLuhnAlgo(input) {
    const number2 = input.replace(NON_DIGIT_REGEX, '');
    let length2 = number2.length;
    let bit = 1;
    let sum = 0;
    while (length2) {
        const value2 = +number2[--length2];
        bit ^= 1;
        sum += bit ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][value2] : value2;
    }
    return sum % 10 === 0;
}

// src/utils/isOfType/isOfType.ts
function isOfType(type, object2) {
    return object2.type === type;
}

// src/utils/schemaResult/schemaResult.ts
function schemaResult(typed, output, issues) {
    return { typed, output, issues };
}

// src/utils/stringify/stringify.ts
function stringify(input) {
    let type = typeof input;
    if (type === 'object') {
        type = input ? Object.getPrototypeOf(input).constructor.name : 'null';
    }
    return type === 'string' ? `"${input}"` : type === 'number' || type === 'bigint' || type === 'boolean' ? `${input}` : type;
}

// src/utils/pipeResult/utils/pipeIssue/pipeIssue.ts
function pipeIssue(context, config, issue) {
    const received = issue.received ?? stringify(issue.input);
    const schemaIssue2 = {
        reason: context.type,
        context: issue.context.type,
        expected: issue.context.expects,
        received,
        message: `Invalid ${issue.label}: ${issue.context.expects ? `Expected ${issue.context.expects} but r` : 'R'}eceived ${received}`,
        input: issue.input,
        requirement: issue.context.requirement,
        path: issue.path,
        lang: config?.lang,
        abortEarly: config?.abortEarly,
        abortPipeEarly: config?.abortPipeEarly,
        skipPipe: config?.skipPipe,
    };
    schemaIssue2.message = i18n(false, issue.context, issue.reference, config, schemaIssue2);
    return schemaIssue2;
}

// src/utils/pipeResult/pipeResult.ts
function pipeResult(context, input, config, issues) {
    if (context.pipe && !config?.skipPipe) {
        for (const action of context.pipe) {
            const result = action._parse(input);
            if (result.issues) {
                for (const actionIssue2 of result.issues) {
                    const schemaIssue2 = pipeIssue(context, config, actionIssue2);
                    issues ? issues.push(schemaIssue2) : (issues = [schemaIssue2]);
                }
                if (config?.abortEarly || config?.abortPipeEarly) {
                    break;
                }
            } else {
                input = result.output;
            }
        }
    }
    return schemaResult(true, input, issues);
}

// src/utils/pipeResult/pipeResultAsync.ts
async function pipeResultAsync(context, input, config, issues) {
    if (context.pipe && !config?.skipPipe) {
        for (const action of context.pipe) {
            const result = await action._parse(input);
            if (result.issues) {
                for (const actionIssue2 of result.issues) {
                    const schemaIssue2 = pipeIssue(context, config, actionIssue2);
                    issues ? issues.push(schemaIssue2) : (issues = [schemaIssue2]);
                }
                if (config?.abortEarly || config?.abortPipeEarly) {
                    break;
                }
            } else {
                input = result.output;
            }
        }
    }
    return schemaResult(true, input, issues);
}

// src/utils/restAndDefaultArgs/restAndDefaultArgs.ts
function restAndDefaultArgs(arg1, arg2, arg3) {
    if (!arg1 || (typeof arg1 === 'object' && !Array.isArray(arg1))) {
        const [error2, pipe2] = defaultArgs(arg2, arg3);
        return [arg1, error2, pipe2];
    }
    const [error, pipe] = defaultArgs(arg1, arg2);
    return [void 0, error, pipe];
}

// src/utils/schemaIssue/schemaIssue.ts
function schemaIssue(context, reference, input, config, other) {
    const received = stringify(input);
    const expected = other?.expected ?? context.expects;
    const issue = {
        reason: other?.reason ?? 'type',
        context: context.type,
        expected,
        received,
        message: `Invalid type: Expected ${expected} but received ${received}`,
        input,
        path: other?.path,
        issues: other?.issues,
        lang: config?.lang,
        abortEarly: config?.abortEarly,
        abortPipeEarly: config?.abortPipeEarly,
        skipPipe: config?.skipPipe,
    };
    issue.message = i18n(true, context, reference, config, issue);
    return { typed: false, output: input, issues: [issue] };
}

// src/methods/getFallback/getFallback.ts
function getFallback(schema, info) {
    return typeof schema.fallback === 'function' ? schema.fallback(info) : schema.fallback;
}

// src/methods/getFallback/getFallbackAsync.ts
async function getFallbackAsync(schema, info) {
    return typeof schema.fallback === 'function' ? await schema.fallback(info) : schema.fallback;
}

// src/methods/fallback/fallback.ts
function fallback(schema, fallback2) {
    return {
        ...schema,
        fallback: fallback2,
        _parse(input, config) {
            const result = schema._parse(input, config);
            return result.issues ? schemaResult(true, getFallback(this, { input, issues: result.issues })) : result;
        },
    };
}

// src/methods/fallback/fallbackAsync.ts
function fallbackAsync(schema, fallback2) {
    return {
        ...schema,
        fallback: fallback2,
        async _parse(input, config) {
            const result = await schema._parse(input, config);
            return result.issues ? schemaResult(true, await getFallbackAsync(this, { input, issues: result.issues })) : result;
        },
    };
}

// src/methods/forward/forward.ts
function forward(validation, pathList) {
    return {
        ...validation,
        _parse(input) {
            const result = validation._parse(input);
            if (result.issues) {
                for (const issue of result.issues) {
                    let pathInput = input;
                    for (const key of pathList) {
                        const pathValue = pathInput[key];
                        issue.input = pathValue;
                        const pathItem = {
                            type: 'unknown',
                            origin: 'value',
                            input: pathInput,
                            key,
                            value: pathValue,
                        };
                        issue.path ? issue.path.push(pathItem) : (issue.path = [pathItem]);
                        if (!pathValue) {
                            break;
                        }
                        pathInput = pathValue;
                    }
                }
            }
            return result;
        },
    };
}

// src/methods/forward/forwardAsync.ts
function forwardAsync(validation, pathList) {
    return {
        ...validation,
        async _parse(input) {
            const result = await validation._parse(input);
            if (result.issues) {
                for (const issue of result.issues) {
                    let pathInput = input;
                    for (const key of pathList) {
                        const pathValue = pathInput[key];
                        issue.input = pathValue;
                        const pathItem = {
                            type: 'unknown',
                            origin: 'value',
                            input: pathInput,
                            key,
                            value: pathValue,
                        };
                        issue.path ? issue.path.push(pathItem) : (issue.path = [pathItem]);
                        if (!pathValue) {
                            break;
                        }
                        pathInput = pathValue;
                    }
                }
            }
            return result;
        },
    };
}

// src/methods/getDefault/getDefault.ts
function getDefault(schema) {
    return typeof schema.default === 'function' ? schema.default() : schema.default;
}

// src/methods/getDefault/getDefaultAsync.ts
async function getDefaultAsync(schema) {
    return typeof schema.default === 'function' ? await schema.default() : schema.default;
}

// src/methods/getDefaults/getDefaults.ts
function getDefaults(schema) {
    if (schema.default !== void 0) {
        return getDefault(schema);
    }
    if (isOfType('object', schema)) {
        return Object.fromEntries(Object.entries(schema.entries).map(([key, value2]) => [key, getDefaults(value2)]));
    }
    if (isOfType('tuple', schema)) {
        return schema.items.map(getDefaults);
    }
    return void 0;
}

// src/methods/getDefaults/getDefaultsAsync.ts
async function getDefaultsAsync(schema) {
    if (schema.default !== void 0) {
        return getDefaultAsync(schema);
    }
    if (isOfType('object', schema)) {
        return Object.fromEntries(
            await Promise.all(Object.entries(schema.entries).map(async ([key, value2]) => [key, await getDefaultsAsync(value2)]))
        );
    }
    if (isOfType('tuple', schema)) {
        return Promise.all(schema.items.map(getDefaultsAsync));
    }
    return void 0;
}

// src/methods/getFallbacks/getFallbacks.ts
function getFallbacks(schema) {
    if (schema.fallback !== void 0) {
        return getFallback(schema);
    }
    if (isOfType('object', schema)) {
        return Object.fromEntries(Object.entries(schema.entries).map(([key, value2]) => [key, getFallbacks(value2)]));
    }
    if (isOfType('tuple', schema)) {
        return schema.items.map(getFallbacks);
    }
    return void 0;
}

// src/methods/getFallbacks/getFallbacksAsync.ts
async function getFallbacksAsync(schema) {
    if (schema.fallback !== void 0) {
        return getFallbackAsync(schema);
    }
    if (isOfType('object', schema)) {
        return Object.fromEntries(
            await Promise.all(Object.entries(schema.entries).map(async ([key, value2]) => [key, await getFallbacksAsync(value2)]))
        );
    }
    if (isOfType('tuple', schema)) {
        return Promise.all(schema.items.map(getFallbacksAsync));
    }
    return void 0;
}

// src/methods/is/is.ts
function is(schema, input, config) {
    return !schema._parse(input, {
        abortEarly: true,
        skipPipe: getGlobalConfig(config)?.skipPipe,
    }).issues;
}

// src/schemas/any/any.ts
function any(pipe) {
    return {
        type: 'any',
        expects: 'any',
        async: false,
        pipe,
        _parse(input, config) {
            return pipeResult(this, input, config);
        },
    };
}

// src/schemas/any/anyAsync.ts
function anyAsync(pipe) {
    return {
        type: 'any',
        expects: 'any',
        async: true,
        pipe,
        async _parse(input, config) {
            return pipeResultAsync(this, input, config);
        },
    };
}

// src/schemas/array/array.ts
function array(item, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'array',
        expects: 'Array',
        async: false,
        item,
        message,
        pipe,
        _parse(input, config) {
            if (Array.isArray(input)) {
                let typed = true;
                let issues;
                const output = [];
                for (let key = 0; key < input.length; key++) {
                    const value2 = input[key];
                    const result = this.item._parse(value2, config);
                    if (result.issues) {
                        const pathItem = {
                            type: 'array',
                            origin: 'value',
                            input,
                            key,
                            value: value2,
                        };
                        for (const issue of result.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = result.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    if (!result.typed) {
                        typed = false;
                    }
                    output.push(result.output);
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, array, input, config);
        },
    };
}

// src/schemas/array/arrayAsync.ts
function arrayAsync(item, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'array',
        expects: 'Array',
        async: true,
        item,
        message,
        pipe,
        async _parse(input, config) {
            if (Array.isArray(input)) {
                let typed = true;
                let issues;
                const output = [];
                await Promise.all(
                    input.map(async (value2, key) => {
                        if (!(config?.abortEarly && issues)) {
                            const result = await this.item._parse(value2, config);
                            if (!(config?.abortEarly && issues)) {
                                if (result.issues) {
                                    const pathItem = {
                                        type: 'array',
                                        origin: 'value',
                                        input,
                                        key,
                                        value: value2,
                                    };
                                    for (const issue of result.issues) {
                                        if (issue.path) {
                                            issue.path.unshift(pathItem);
                                        } else {
                                            issue.path = [pathItem];
                                        }
                                        issues?.push(issue);
                                    }
                                    if (!issues) {
                                        issues = result.issues;
                                    }
                                    if (config?.abortEarly) {
                                        typed = false;
                                        throw null;
                                    }
                                }
                                if (!result.typed) {
                                    typed = false;
                                }
                                output[key] = result.output;
                            }
                        }
                    })
                ).catch(() => null);
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, arrayAsync, input, config);
        },
    };
}

// src/schemas/bigint/bigint.ts
function bigint(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'bigint',
        expects: 'bigint',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (typeof input === 'bigint') {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, bigint, input, config);
        },
    };
}

// src/schemas/bigint/bigintAsync.ts
function bigintAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'bigint',
        expects: 'bigint',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (typeof input === 'bigint') {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, bigintAsync, input, config);
        },
    };
}

// src/schemas/blob/blob.ts
function blob(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'blob',
        expects: 'Blob',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (input instanceof Blob) {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, blob, input, config);
        },
    };
}

// src/schemas/blob/blobAsync.ts
function blobAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'blob',
        expects: 'Blob',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (input instanceof Blob) {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, blobAsync, input, config);
        },
    };
}

// src/schemas/boolean/boolean.ts
function boolean(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'boolean',
        expects: 'boolean',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (typeof input === 'boolean') {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, boolean, input, config);
        },
    };
}

// src/schemas/boolean/booleanAsync.ts
function booleanAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'boolean',
        expects: 'boolean',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (typeof input === 'boolean') {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, booleanAsync, input, config);
        },
    };
}

// src/schemas/date/date.ts
function date(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'date',
        expects: 'Date',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (input instanceof Date && !isNaN(input.getTime())) {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, date, input, config);
        },
    };
}

// src/schemas/date/dateAsync.ts
function dateAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'date',
        expects: 'Date',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (input instanceof Date && !isNaN(input.getTime())) {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, dateAsync, input, config);
        },
    };
}

// src/schemas/enum/enum.ts
function enum_(enum__, message) {
    const values = Object.values(enum__);
    return {
        type: 'enum',
        expects: values.map(stringify).join(' | '),
        async: false,
        enum: enum__,
        message,
        _parse(input, config) {
            if (values.includes(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, enum_, input, config);
        },
    };
}

// src/schemas/enum/enumAsync.ts
function enumAsync(enum_2, message) {
    const values = Object.values(enum_2);
    return {
        type: 'enum',
        expects: values.map(stringify).join(' | '),
        async: true,
        enum: enum_2,
        message,
        async _parse(input, config) {
            if (values.includes(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, enumAsync, input, config);
        },
    };
}

// src/schemas/instance/instance.ts
function instance(class_, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'instance',
        expects: class_.name,
        async: false,
        class: class_,
        message,
        pipe,
        _parse(input, config) {
            if (input instanceof this.class) {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, instance, input, config);
        },
    };
}

// src/schemas/instance/instanceAsync.ts
function instanceAsync(class_, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'instance',
        expects: class_.name,
        async: true,
        class: class_,
        message,
        pipe,
        async _parse(input, config) {
            if (input instanceof this.class) {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, instanceAsync, input, config);
        },
    };
}

// src/schemas/intersect/utils/mergeOutputs/mergeOutputs.ts
function mergeOutputs(output1, output2) {
    if (typeof output1 === typeof output2) {
        if (output1 === output2 || (output1 instanceof Date && output2 instanceof Date && +output1 === +output2)) {
            return { output: output1 };
        }
        if (Array.isArray(output1) && Array.isArray(output2)) {
            if (output1.length === output2.length) {
                const array2 = [];
                for (let index = 0; index < output1.length; index++) {
                    const result = mergeOutputs(output1[index], output2[index]);
                    if (result.invalid) {
                        return result;
                    }
                    array2.push(result.output);
                }
                return { output: array2 };
            }
            return { invalid: true };
        }
        if (output1 && output2 && output1.constructor === Object && output2.constructor === Object) {
            const object2 = { ...output1, ...output2 };
            for (const key in output1) {
                if (key in output2) {
                    const result = mergeOutputs(output1[key], output2[key]);
                    if (result.invalid) {
                        return result;
                    }
                    object2[key] = result.output;
                }
            }
            return { output: object2 };
        }
    }
    return { invalid: true };
}

// src/schemas/intersect/intersect.ts
function intersect(options, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'intersect',
        expects: [...new Set(options.map((option) => option.expects))].join(' & '),
        async: false,
        options,
        message,
        pipe,
        _parse(input, config) {
            let typed = true;
            let issues;
            let output;
            const outputs = [];
            for (const schema of this.options) {
                const result = schema._parse(input, config);
                if (result.issues) {
                    if (issues) {
                        for (const issue of result.issues) {
                            issues.push(issue);
                        }
                    } else {
                        issues = result.issues;
                    }
                    if (config?.abortEarly) {
                        typed = false;
                        break;
                    }
                }
                if (!result.typed) {
                    typed = false;
                }
                outputs.push(result.output);
            }
            if (typed) {
                output = outputs[0];
                for (let index = 1; index < outputs.length; index++) {
                    const result = mergeOutputs(output, outputs[index]);
                    if (result.invalid) {
                        return schemaIssue(this, intersect, input, config);
                    }
                    output = result.output;
                }
                return pipeResult(this, output, config, issues);
            }
            return schemaResult(false, output, issues);
        },
    };
}

// src/schemas/intersect/intersectAsync.ts
function intersectAsync(options, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'intersect',
        expects: [...new Set(options.map((option) => option.expects))].join(' & '),
        async: true,
        options,
        message,
        pipe,
        async _parse(input, config) {
            let typed = true;
            let issues;
            let output;
            const outputs = [];
            await Promise.all(
                this.options.map(async (schema) => {
                    if (!(config?.abortEarly && issues)) {
                        const result = await schema._parse(input, config);
                        if (!(config?.abortEarly && issues)) {
                            if (result.issues) {
                                if (issues) {
                                    for (const issue of result.issues) {
                                        issues.push(issue);
                                    }
                                } else {
                                    issues = result.issues;
                                }
                                if (config?.abortEarly) {
                                    typed = false;
                                    throw null;
                                }
                            }
                            if (!result.typed) {
                                typed = false;
                            }
                            outputs.push(result.output);
                        }
                    }
                })
            ).catch(() => null);
            if (typed) {
                output = outputs[0];
                for (let index = 1; index < outputs.length; index++) {
                    const result = mergeOutputs(output, outputs[index]);
                    if (result.invalid) {
                        return schemaIssue(this, intersectAsync, input, config);
                    }
                    output = result.output;
                }
                return pipeResultAsync(this, output, config, issues);
            }
            return schemaResult(false, output, issues);
        },
    };
}

// src/schemas/lazy/lazy.ts
function lazy(getter) {
    return {
        type: 'lazy',
        expects: 'unknown',
        async: false,
        getter,
        _parse(input, config) {
            return this.getter(input)._parse(input, config);
        },
    };
}

// src/schemas/lazy/lazyAsync.ts
function lazyAsync(getter) {
    return {
        type: 'lazy',
        expects: 'unknown',
        async: true,
        getter,
        async _parse(input, config) {
            return (await this.getter(input))._parse(input, config);
        },
    };
}

// src/schemas/literal/literal.ts
function literal(literal_, message) {
    return {
        type: 'literal',
        expects: stringify(literal_),
        async: false,
        literal: literal_,
        message,
        _parse(input, config) {
            if (input === this.literal) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, literal, input, config);
        },
    };
}

// src/schemas/literal/literalAsync.ts
function literalAsync(literal2, message) {
    return {
        type: 'literal',
        expects: stringify(literal2),
        async: true,
        literal: literal2,
        message,
        async _parse(input, config) {
            if (input === this.literal) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, literalAsync, input, config);
        },
    };
}

// src/schemas/map/map.ts
function map(key, value2, arg3, arg4) {
    const [message, pipe] = defaultArgs(arg3, arg4);
    return {
        type: 'map',
        expects: 'Map',
        async: false,
        key,
        value: value2,
        message,
        pipe,
        _parse(input, config) {
            if (input instanceof Map) {
                let typed = true;
                let issues;
                const output = /* @__PURE__ */ new Map();
                for (const [inputKey, inputValue] of input.entries()) {
                    let pathItem;
                    const keyResult = this.key._parse(inputKey, config);
                    if (keyResult.issues) {
                        pathItem = {
                            type: 'map',
                            origin: 'key',
                            input,
                            key: inputKey,
                            value: inputValue,
                        };
                        for (const issue of keyResult.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = keyResult.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    const valueResult = this.value._parse(inputValue, config);
                    if (valueResult.issues) {
                        pathItem = pathItem ?? {
                            type: 'map',
                            origin: 'value',
                            input,
                            key: inputKey,
                            value: inputValue,
                        };
                        for (const issue of valueResult.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = valueResult.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    if (!keyResult.typed || !valueResult.typed) {
                        typed = false;
                    }
                    output.set(keyResult.output, valueResult.output);
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, map, input, config);
        },
    };
}

// src/schemas/map/mapAsync.ts
function mapAsync(key, value2, arg3, arg4) {
    const [message, pipe] = defaultArgs(arg3, arg4);
    return {
        type: 'map',
        expects: 'Map',
        async: true,
        key,
        value: value2,
        message,
        pipe,
        async _parse(input, config) {
            if (input instanceof Map) {
                let typed = true;
                let issues;
                const output = /* @__PURE__ */ new Map();
                await Promise.all(
                    Array.from(input.entries()).map(async ([inputKey, inputValue]) => {
                        let pathItem;
                        const [keyResult, valueResult] = await Promise.all(
                            [
                                { schema: this.key, value: inputKey, origin: 'key' },
                                { schema: this.value, value: inputValue, origin: 'value' },
                            ].map(async ({ schema, value: value3, origin }) => {
                                if (!(config?.abortEarly && issues)) {
                                    const result = await schema._parse(value3, config);
                                    if (!(config?.abortEarly && issues)) {
                                        if (result.issues) {
                                            pathItem = pathItem ?? {
                                                type: 'map',
                                                origin,
                                                input,
                                                key: inputKey,
                                                value: inputValue,
                                            };
                                            for (const issue of result.issues) {
                                                if (issue.path) {
                                                    issue.path.unshift(pathItem);
                                                } else {
                                                    issue.path = [pathItem];
                                                }
                                                issues?.push(issue);
                                            }
                                            if (!issues) {
                                                issues = result.issues;
                                            }
                                            if (config?.abortEarly) {
                                                throw null;
                                            }
                                        }
                                        return result;
                                    }
                                }
                            })
                        ).catch(() => []);
                        if (!keyResult?.typed || !valueResult?.typed) {
                            typed = false;
                        }
                        if (keyResult && valueResult) {
                            output.set(keyResult.output, valueResult.output);
                        }
                    })
                );
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, mapAsync, input, config);
        },
    };
}

// src/schemas/nan/nan.ts
function nan(message) {
    return {
        type: 'nan',
        expects: 'NaN',
        async: false,
        message,
        _parse(input, config) {
            if (Number.isNaN(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, nan, input, config);
        },
    };
}

// src/schemas/nan/nanAsync.ts
function nanAsync(message) {
    return {
        type: 'nan',
        expects: 'NaN',
        async: true,
        message,
        async _parse(input, config) {
            if (Number.isNaN(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, nanAsync, input, config);
        },
    };
}

// src/schemas/never/never.ts
function never(message) {
    return {
        type: 'never',
        expects: 'never',
        async: false,
        message,
        _parse(input, config) {
            return schemaIssue(this, never, input, config);
        },
    };
}

// src/schemas/never/neverAsync.ts
function neverAsync(message) {
    return {
        type: 'never',
        expects: 'never',
        async: true,
        message,
        async _parse(input, config) {
            return schemaIssue(this, neverAsync, input, config);
        },
    };
}

// src/schemas/nonNullable/nonNullable.ts
function nonNullable(wrapped, message) {
    return {
        type: 'non_nullable',
        expects: '!null',
        async: false,
        wrapped,
        message,
        _parse(input, config) {
            if (input === null) {
                return schemaIssue(this, nonNullable, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nonNullable/nonNullableAsync.ts
function nonNullableAsync(wrapped, message) {
    return {
        type: 'non_nullable',
        expects: '!null',
        async: true,
        wrapped,
        message,
        async _parse(input, config) {
            if (input === null) {
                return schemaIssue(this, nonNullableAsync, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nonNullish/nonNullish.ts
function nonNullish(wrapped, message) {
    return {
        type: 'non_nullish',
        expects: '!null & !undefined',
        async: false,
        wrapped,
        message,
        _parse(input, config) {
            if (input === null || input === void 0) {
                return schemaIssue(this, nonNullish, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nonNullish/nonNullishAsync.ts
function nonNullishAsync(wrapped, message) {
    return {
        type: 'non_nullish',
        expects: '!null & !undefined',
        async: true,
        wrapped,
        message,
        async _parse(input, config) {
            if (input === null || input === void 0) {
                return schemaIssue(this, nonNullishAsync, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nonOptional/nonOptional.ts
function nonOptional(wrapped, message) {
    return {
        type: 'non_optional',
        expects: '!undefined',
        async: false,
        wrapped,
        message,
        _parse(input, config) {
            if (input === void 0) {
                return schemaIssue(this, nonOptional, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nonOptional/nonOptionalAsync.ts
function nonOptionalAsync(wrapped, message) {
    return {
        type: 'non_optional',
        expects: '!undefined',
        async: true,
        wrapped,
        message,
        async _parse(input, config) {
            if (input === void 0) {
                return schemaIssue(this, nonOptionalAsync, input, config);
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nullable/nullable.ts
function nullable(wrapped, default_) {
    return {
        type: 'nullable',
        expects: `${wrapped.expects} | null`,
        async: false,
        wrapped,
        default: default_,
        _parse(input, config) {
            if (input === null) {
                const override = getDefault(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nullable/nullableAsync.ts
function nullableAsync(wrapped, default_) {
    return {
        type: 'nullable',
        expects: `${wrapped.expects} | null`,
        async: true,
        wrapped,
        default: default_,
        async _parse(input, config) {
            if (input === null) {
                const override = await getDefaultAsync(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nullish/nullish.ts
function nullish(wrapped, default_) {
    return {
        type: 'nullish',
        expects: `${wrapped.expects} | null | undefined`,
        async: false,
        wrapped,
        default: default_,
        _parse(input, config) {
            if (input === null || input === void 0) {
                const override = getDefault(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/nullish/nullishAsync.ts
function nullishAsync(wrapped, default_) {
    return {
        type: 'nullish',
        expects: `${wrapped.expects} | null | undefined`,
        async: true,
        wrapped,
        default: default_,
        async _parse(input, config) {
            if (input === null || input === void 0) {
                const override = await getDefaultAsync(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/null/null.ts
function null_(message) {
    return {
        type: 'null',
        expects: 'null',
        async: false,
        message,
        _parse(input, config) {
            if (input === null) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, null_, input, config);
        },
    };
}

// src/schemas/null/nullAsync.ts
function nullAsync(message) {
    return {
        type: 'null',
        expects: 'null',
        async: true,
        message,
        async _parse(input, config) {
            if (input === null) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, nullAsync, input, config);
        },
    };
}

// src/schemas/number/number.ts
function number(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'number',
        expects: 'number',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (typeof input === 'number' && !isNaN(input)) {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, number, input, config);
        },
    };
}

// src/schemas/number/numberAsync.ts
function numberAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'number',
        expects: 'number',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (typeof input === 'number' && !isNaN(input)) {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, numberAsync, input, config);
        },
    };
}

// src/schemas/object/object.ts
function object(entries, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    let cachedEntries;
    return {
        type: 'object',
        expects: 'Object',
        async: false,
        entries,
        rest,
        message,
        pipe,
        _parse(input, config) {
            if (input && typeof input === 'object') {
                cachedEntries = cachedEntries ?? Object.entries(this.entries);
                let typed = true;
                let issues;
                const output = {};
                for (const [key, schema] of cachedEntries) {
                    const value2 = input[key];
                    const result = schema._parse(value2, config);
                    if (result.issues) {
                        const pathItem = {
                            type: 'object',
                            origin: 'value',
                            input,
                            key,
                            value: value2,
                        };
                        for (const issue of result.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = result.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    if (!result.typed) {
                        typed = false;
                    }
                    if (result.output !== void 0 || key in input) {
                        output[key] = result.output;
                    }
                }
                if (this.rest && !(config?.abortEarly && issues)) {
                    for (const key in input) {
                        if (!(key in this.entries)) {
                            const value2 = input[key];
                            const result = this.rest._parse(value2, config);
                            if (result.issues) {
                                const pathItem = {
                                    type: 'object',
                                    origin: 'value',
                                    input,
                                    key,
                                    value: value2,
                                };
                                for (const issue of result.issues) {
                                    if (issue.path) {
                                        issue.path.unshift(pathItem);
                                    } else {
                                        issue.path = [pathItem];
                                    }
                                    issues?.push(issue);
                                }
                                if (!issues) {
                                    issues = result.issues;
                                }
                                if (config?.abortEarly) {
                                    typed = false;
                                    break;
                                }
                            }
                            if (!result.typed) {
                                typed = false;
                            }
                            output[key] = result.output;
                        }
                    }
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, object, input, config);
        },
    };
}

// src/schemas/object/objectAsync.ts
function objectAsync(entries, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    let cachedEntries;
    return {
        type: 'object',
        expects: 'Object',
        async: true,
        entries,
        rest,
        message,
        pipe,
        async _parse(input, config) {
            if (input && typeof input === 'object') {
                cachedEntries = cachedEntries ?? Object.entries(this.entries);
                let typed = true;
                let issues;
                const output = {};
                await Promise.all([
                    Promise.all(
                        cachedEntries.map(async ([key, schema]) => {
                            if (!(config?.abortEarly && issues)) {
                                const value2 = input[key];
                                const result = await schema._parse(value2, config);
                                if (!(config?.abortEarly && issues)) {
                                    if (result.issues) {
                                        const pathItem = {
                                            type: 'object',
                                            origin: 'value',
                                            input,
                                            key,
                                            value: value2,
                                        };
                                        for (const issue of result.issues) {
                                            if (issue.path) {
                                                issue.path.unshift(pathItem);
                                            } else {
                                                issue.path = [pathItem];
                                            }
                                            issues?.push(issue);
                                        }
                                        if (!issues) {
                                            issues = result.issues;
                                        }
                                        if (config?.abortEarly) {
                                            typed = false;
                                            throw null;
                                        }
                                    }
                                    if (!result.typed) {
                                        typed = false;
                                    }
                                    if (result.output !== void 0 || key in input) {
                                        output[key] = result.output;
                                    }
                                }
                            }
                        })
                    ),
                    this.rest &&
                        Promise.all(
                            Object.entries(input).map(async ([key, value2]) => {
                                if (!(config?.abortEarly && issues)) {
                                    if (!(key in this.entries)) {
                                        const result = await this.rest._parse(value2, config);
                                        if (!(config?.abortEarly && issues)) {
                                            if (result.issues) {
                                                const pathItem = {
                                                    type: 'object',
                                                    origin: 'value',
                                                    input,
                                                    key,
                                                    value: value2,
                                                };
                                                for (const issue of result.issues) {
                                                    if (issue.path) {
                                                        issue.path.unshift(pathItem);
                                                    } else {
                                                        issue.path = [pathItem];
                                                    }
                                                    issues?.push(issue);
                                                }
                                                if (!issues) {
                                                    issues = result.issues;
                                                }
                                                if (config?.abortEarly) {
                                                    typed = false;
                                                    throw null;
                                                }
                                            }
                                            if (!result.typed) {
                                                typed = false;
                                            }
                                            output[key] = result.output;
                                        }
                                    }
                                }
                            })
                        ),
                ]).catch(() => null);
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, objectAsync, input, config);
        },
    };
}

// src/schemas/optional/optional.ts
function optional(wrapped, default_) {
    return {
        type: 'optional',
        expects: `${wrapped.expects} | undefined`,
        async: false,
        wrapped,
        default: default_,
        _parse(input, config) {
            if (input === void 0) {
                const override = getDefault(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/optional/optionalAsync.ts
function optionalAsync(wrapped, default_) {
    return {
        type: 'optional',
        expects: `${wrapped.expects} | undefined`,
        async: true,
        wrapped,
        default: default_,
        async _parse(input, config) {
            if (input === void 0) {
                const override = await getDefaultAsync(this);
                if (override === void 0) {
                    return schemaResult(true, input);
                }
                input = override;
            }
            return this.wrapped._parse(input, config);
        },
    };
}

// src/schemas/picklist/picklist.ts
function picklist(options, message) {
    return {
        type: 'picklist',
        expects: options.map(stringify).join(' | '),
        async: false,
        options,
        message,
        _parse(input, config) {
            if (this.options.includes(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, picklist, input, config);
        },
    };
}

// src/schemas/picklist/picklistAsync.ts
function picklistAsync(options, message) {
    return {
        type: 'picklist',
        expects: options.map(stringify).join(' | '),
        async: true,
        options,
        message,
        async _parse(input, config) {
            if (this.options.includes(input)) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, picklistAsync, input, config);
        },
    };
}

// src/schemas/string/string.ts
function string(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'string',
        expects: 'string',
        async: false,
        message,
        pipe,
        _parse(input, config) {
            if (typeof input === 'string') {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, string, input, config);
        },
    };
}

// src/schemas/string/stringAsync.ts
function stringAsync(arg1, arg2) {
    const [message, pipe] = defaultArgs(arg1, arg2);
    return {
        type: 'string',
        expects: 'string',
        async: true,
        message,
        pipe,
        async _parse(input, config) {
            if (typeof input === 'string') {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, stringAsync, input, config);
        },
    };
}

// src/schemas/record/utils/recordArgs/recordArgs.ts
function recordArgs(arg1, arg2, arg3, arg4) {
    if (typeof arg2 === 'object' && !Array.isArray(arg2)) {
        const [message2, pipe2] = defaultArgs(arg3, arg4);
        return [arg1, arg2, message2, pipe2];
    }
    const [message, pipe] = defaultArgs(arg2, arg3);
    return [string(), arg1, message, pipe];
}

// src/schemas/record/values.ts
var BLOCKED_KEYS = ['__proto__', 'prototype', 'constructor'];

// src/schemas/record/record.ts
function record(arg1, arg2, arg3, arg4) {
    const [key, value2, message, pipe] = recordArgs(arg1, arg2, arg3, arg4);
    return {
        type: 'record',
        expects: 'Object',
        async: false,
        key,
        value: value2,
        message,
        pipe,
        _parse(input, config) {
            if (input && typeof input === 'object') {
                let typed = true;
                let issues;
                const output = {};
                for (const [inputKey, inputValue] of Object.entries(input)) {
                    if (!BLOCKED_KEYS.includes(inputKey)) {
                        let pathItem;
                        const keyResult = this.key._parse(inputKey, config);
                        if (keyResult.issues) {
                            pathItem = {
                                type: 'record',
                                origin: 'key',
                                input,
                                key: inputKey,
                                value: inputValue,
                            };
                            for (const issue of keyResult.issues) {
                                issue.path = [pathItem];
                                issues?.push(issue);
                            }
                            if (!issues) {
                                issues = keyResult.issues;
                            }
                            if (config?.abortEarly) {
                                typed = false;
                                break;
                            }
                        }
                        const valueResult = this.value._parse(inputValue, config);
                        if (valueResult.issues) {
                            pathItem = pathItem ?? {
                                type: 'record',
                                origin: 'value',
                                input,
                                key: inputKey,
                                value: inputValue,
                            };
                            for (const issue of valueResult.issues) {
                                if (issue.path) {
                                    issue.path.unshift(pathItem);
                                } else {
                                    issue.path = [pathItem];
                                }
                                issues?.push(issue);
                            }
                            if (!issues) {
                                issues = valueResult.issues;
                            }
                            if (config?.abortEarly) {
                                typed = false;
                                break;
                            }
                        }
                        if (!keyResult.typed || !valueResult.typed) {
                            typed = false;
                        }
                        if (keyResult.typed) {
                            output[keyResult.output] = valueResult.output;
                        }
                    }
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, record, input, config);
        },
    };
}

// src/schemas/record/recordAsync.ts
function recordAsync(arg1, arg2, arg3, arg4) {
    const [key, value2, message, pipe] = recordArgs(arg1, arg2, arg3, arg4);
    return {
        type: 'record',
        expects: 'Object',
        async: true,
        key,
        value: value2,
        message,
        pipe,
        async _parse(input, config) {
            if (input && typeof input === 'object') {
                let typed = true;
                let issues;
                const output = {};
                await Promise.all(
                    // Note: `Object.entries(...)` converts each key to a string
                    Object.entries(input).map(async ([inputKey, inputValue]) => {
                        if (!BLOCKED_KEYS.includes(inputKey)) {
                            let pathItem;
                            const [keyResult, valueResult] = await Promise.all(
                                [
                                    { schema: this.key, value: inputKey, origin: 'key' },
                                    { schema: this.value, value: inputValue, origin: 'value' },
                                ].map(async ({ schema, value: value3, origin }) => {
                                    if (!(config?.abortEarly && issues)) {
                                        const result = await schema._parse(value3, config);
                                        if (!(config?.abortEarly && issues)) {
                                            if (result.issues) {
                                                pathItem = pathItem ?? {
                                                    type: 'record',
                                                    origin,
                                                    input,
                                                    key: inputKey,
                                                    value: inputValue,
                                                };
                                                for (const issue of result.issues) {
                                                    if (issue.path) {
                                                        issue.path.unshift(pathItem);
                                                    } else {
                                                        issue.path = [pathItem];
                                                    }
                                                    issues?.push(issue);
                                                }
                                                if (!issues) {
                                                    issues = result.issues;
                                                }
                                                if (config?.abortEarly) {
                                                    throw null;
                                                }
                                            }
                                            return result;
                                        }
                                    }
                                })
                            ).catch(() => []);
                            if (!keyResult?.typed || !valueResult?.typed) {
                                typed = false;
                            }
                            if (keyResult?.typed && valueResult) {
                                output[keyResult.output] = valueResult.output;
                            }
                        }
                    })
                );
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, recordAsync, input, config);
        },
    };
}

// src/schemas/set/set.ts
function set(value2, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'set',
        expects: 'Set',
        async: false,
        value: value2,
        message,
        pipe,
        _parse(input, config) {
            if (input instanceof Set) {
                let key = 0;
                let typed = true;
                let issues;
                const output = /* @__PURE__ */ new Set();
                for (const inputValue of input) {
                    const result = this.value._parse(inputValue, config);
                    if (result.issues) {
                        const pathItem = {
                            type: 'set',
                            origin: 'value',
                            input,
                            key,
                            value: inputValue,
                        };
                        for (const issue of result.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = result.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    if (!result.typed) {
                        typed = false;
                    }
                    output.add(result.output);
                    key++;
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, set, input, config);
        },
    };
}

// src/schemas/set/setAsync.ts
function setAsync(value2, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'set',
        expects: 'Set',
        async: true,
        value: value2,
        message,
        pipe,
        async _parse(input, config) {
            if (input instanceof Set) {
                let typed = true;
                let issues;
                const output = /* @__PURE__ */ new Set();
                await Promise.all(
                    Array.from(input.values()).map(async (inputValue, key) => {
                        if (!(config?.abortEarly && issues)) {
                            const result = await this.value._parse(inputValue, config);
                            if (!(config?.abortEarly && issues)) {
                                if (result.issues) {
                                    const pathItem = {
                                        type: 'set',
                                        origin: 'value',
                                        input,
                                        key,
                                        value: inputValue,
                                    };
                                    for (const issue of result.issues) {
                                        if (issue.path) {
                                            issue.path.unshift(pathItem);
                                        } else {
                                            issue.path = [pathItem];
                                        }
                                        issues?.push(issue);
                                    }
                                    if (!issues) {
                                        issues = result.issues;
                                    }
                                    if (config?.abortEarly) {
                                        typed = false;
                                        throw null;
                                    }
                                }
                                if (!result.typed) {
                                    typed = false;
                                }
                                output.add(result.output);
                            }
                        }
                    })
                ).catch(() => null);
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, setAsync, input, config);
        },
    };
}

// src/schemas/special/special.ts
function special(check, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'special',
        expects: 'unknown',
        async: false,
        check,
        message,
        pipe,
        _parse(input, config) {
            if (this.check(input)) {
                return pipeResult(this, input, config);
            }
            return schemaIssue(this, special, input, config);
        },
    };
}

// src/schemas/special/specialAsync.ts
function specialAsync(check, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'special',
        expects: 'unknown',
        async: true,
        check,
        message,
        pipe,
        async _parse(input, config) {
            if (await this.check(input)) {
                return pipeResultAsync(this, input, config);
            }
            return schemaIssue(this, specialAsync, input, config);
        },
    };
}

// src/schemas/symbol/symbol.ts
function symbol(message) {
    return {
        type: 'symbol',
        expects: 'symbol',
        async: false,
        message,
        _parse(input, config) {
            if (typeof input === 'symbol') {
                return schemaResult(true, input);
            }
            return schemaIssue(this, symbol, input, config);
        },
    };
}

// src/schemas/symbol/symbolAsync.ts
function symbolAsync(message) {
    return {
        type: 'symbol',
        expects: 'symbol',
        async: true,
        message,
        async _parse(input, config) {
            if (typeof input === 'symbol') {
                return schemaResult(true, input);
            }
            return schemaIssue(this, symbolAsync, input, config);
        },
    };
}

// src/schemas/tuple/tuple.ts
function tuple(items, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return {
        type: 'tuple',
        expects: 'Array',
        async: false,
        items,
        rest,
        message,
        pipe,
        _parse(input, config) {
            if (Array.isArray(input)) {
                let typed = true;
                let issues;
                const output = [];
                for (let key = 0; key < this.items.length; key++) {
                    const value2 = input[key];
                    const result = this.items[key]._parse(value2, config);
                    if (result.issues) {
                        const pathItem = {
                            type: 'tuple',
                            origin: 'value',
                            input,
                            key,
                            value: value2,
                        };
                        for (const issue of result.issues) {
                            if (issue.path) {
                                issue.path.unshift(pathItem);
                            } else {
                                issue.path = [pathItem];
                            }
                            issues?.push(issue);
                        }
                        if (!issues) {
                            issues = result.issues;
                        }
                        if (config?.abortEarly) {
                            typed = false;
                            break;
                        }
                    }
                    if (!result.typed) {
                        typed = false;
                    }
                    output[key] = result.output;
                }
                if (this.rest && !(config?.abortEarly && issues)) {
                    for (let key = this.items.length; key < input.length; key++) {
                        const value2 = input[key];
                        const result = this.rest._parse(value2, config);
                        if (result.issues) {
                            const pathItem = {
                                type: 'tuple',
                                origin: 'value',
                                input,
                                key,
                                value: value2,
                            };
                            for (const issue of result.issues) {
                                if (issue.path) {
                                    issue.path.unshift(pathItem);
                                } else {
                                    issue.path = [pathItem];
                                }
                                issues?.push(issue);
                            }
                            if (!issues) {
                                issues = result.issues;
                            }
                            if (config?.abortEarly) {
                                typed = false;
                                break;
                            }
                        }
                        if (!result.typed) {
                            typed = false;
                        }
                        output[key] = result.output;
                    }
                }
                if (typed) {
                    return pipeResult(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, tuple, input, config);
        },
    };
}

// src/schemas/tuple/tupleAsync.ts
function tupleAsync(items, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return {
        type: 'tuple',
        expects: 'Array',
        async: true,
        items,
        rest,
        message,
        pipe,
        async _parse(input, config) {
            if (Array.isArray(input)) {
                let typed = true;
                let issues;
                const output = [];
                await Promise.all([
                    // Parse schema of each tuple item
                    Promise.all(
                        this.items.map(async (schema, key) => {
                            if (!(config?.abortEarly && issues)) {
                                const value2 = input[key];
                                const result = await schema._parse(value2, config);
                                if (!(config?.abortEarly && issues)) {
                                    if (result.issues) {
                                        const pathItem = {
                                            type: 'tuple',
                                            origin: 'value',
                                            input,
                                            key,
                                            value: value2,
                                        };
                                        for (const issue of result.issues) {
                                            if (issue.path) {
                                                issue.path.unshift(pathItem);
                                            } else {
                                                issue.path = [pathItem];
                                            }
                                            issues?.push(issue);
                                        }
                                        if (!issues) {
                                            issues = result.issues;
                                        }
                                        if (config?.abortEarly) {
                                            typed = false;
                                            throw null;
                                        }
                                    }
                                    if (!result.typed) {
                                        typed = false;
                                    }
                                    output[key] = result.output;
                                }
                            }
                        })
                    ),
                    // If necessary parse schema of each rest item
                    this.rest &&
                        Promise.all(
                            input.slice(this.items.length).map(async (value2, index) => {
                                if (!(config?.abortEarly && issues)) {
                                    const key = this.items.length + index;
                                    const result = await this.rest._parse(value2, config);
                                    if (!(config?.abortEarly && issues)) {
                                        if (result.issues) {
                                            const pathItem = {
                                                type: 'tuple',
                                                origin: 'value',
                                                input,
                                                key,
                                                value: value2,
                                            };
                                            for (const issue of result.issues) {
                                                if (issue.path) {
                                                    issue.path.unshift(pathItem);
                                                } else {
                                                    issue.path = [pathItem];
                                                }
                                                issues?.push(issue);
                                            }
                                            if (!issues) {
                                                issues = result.issues;
                                            }
                                            if (config?.abortEarly) {
                                                typed = false;
                                                throw null;
                                            }
                                        }
                                        if (!result.typed) {
                                            typed = false;
                                        }
                                        output[key] = result.output;
                                    }
                                }
                            })
                        ),
                ]).catch(() => null);
                if (typed) {
                    return pipeResultAsync(this, output, config, issues);
                }
                return schemaResult(false, output, issues);
            }
            return schemaIssue(this, tupleAsync, input, config);
        },
    };
}

// src/schemas/undefined/undefined.ts
function undefined_(message) {
    return {
        type: 'undefined',
        expects: 'undefined',
        async: false,
        message,
        _parse(input, config) {
            if (input === void 0) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, undefined_, input, config);
        },
    };
}

// src/schemas/undefined/undefinedAsync.ts
function undefinedAsync(message) {
    return {
        type: 'undefined',
        expects: 'undefined',
        async: true,
        message,
        async _parse(input, config) {
            if (input === void 0) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, undefinedAsync, input, config);
        },
    };
}

// src/schemas/union/utils/subissues/subissues.ts
function subissues(results) {
    let issues;
    if (results) {
        for (const result of results) {
            if (issues) {
                for (const issue of result.issues) {
                    issues.push(issue);
                }
            } else {
                issues = result.issues;
            }
        }
    }
    return issues;
}

// src/schemas/union/union.ts
function union(options, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'union',
        expects: [...new Set(options.map((option) => option.expects))].join(' | '),
        async: false,
        options,
        message,
        pipe,
        _parse(input, config) {
            let validResult;
            let untypedResults;
            let typedResults;
            for (const schema of this.options) {
                const result = schema._parse(input, config);
                if (result.typed) {
                    if (!result.issues) {
                        validResult = result;
                        break;
                    } else {
                        typedResults ? typedResults.push(result) : (typedResults = [result]);
                    }
                } else {
                    untypedResults ? untypedResults.push(result) : (untypedResults = [result]);
                }
            }
            if (validResult) {
                return pipeResult(this, validResult.output, config);
            }
            if (typedResults?.length) {
                const firstResult = typedResults[0];
                return pipeResult(
                    this,
                    firstResult.output,
                    config,
                    // Hint: If there is more than one typed result, we use a general
                    // union issue with subissues because the issues could contradict
                    // each other.
                    typedResults.length === 1
                        ? firstResult.issues
                        : schemaIssue(this, union, input, config, {
                              reason: 'union',
                              issues: subissues(typedResults),
                          }).issues
                );
            }
            if (untypedResults?.length === 1) {
                return untypedResults[0];
            }
            return schemaIssue(this, union, input, config, {
                issues: subissues(untypedResults),
            });
        },
    };
}

// src/schemas/union/unionAsync.ts
function unionAsync(options, arg2, arg3) {
    const [message, pipe] = defaultArgs(arg2, arg3);
    return {
        type: 'union',
        expects: [...new Set(options.map((option) => option.expects))].join(' | '),
        async: true,
        options,
        message,
        pipe,
        async _parse(input, config) {
            let validResult;
            let untypedResults;
            let typedResults;
            for (const schema of this.options) {
                const result = await schema._parse(input, config);
                if (result.typed) {
                    if (!result.issues) {
                        validResult = result;
                        break;
                    } else {
                        typedResults ? typedResults.push(result) : (typedResults = [result]);
                    }
                } else {
                    untypedResults ? untypedResults.push(result) : (untypedResults = [result]);
                }
            }
            if (validResult) {
                return pipeResultAsync(this, validResult.output, config);
            }
            if (typedResults?.length) {
                const firstResult = typedResults[0];
                return pipeResultAsync(
                    this,
                    firstResult.output,
                    config,
                    // Hint: If there is more than one typed result, we use a general
                    // union issue with subissues because the issues could contradict
                    // each other.
                    typedResults.length === 1
                        ? firstResult.issues
                        : schemaIssue(this, unionAsync, input, config, {
                              reason: 'union',
                              issues: subissues(typedResults),
                          }).issues
                );
            }
            if (untypedResults?.length === 1) {
                return untypedResults[0];
            }
            return schemaIssue(this, unionAsync, input, config, {
                issues: subissues(untypedResults),
            });
        },
    };
}

// src/schemas/unknown/unknown.ts
function unknown(pipe) {
    return {
        type: 'unknown',
        expects: 'unknown',
        async: false,
        pipe,
        _parse(input, config) {
            return pipeResult(this, input, config);
        },
    };
}

// src/schemas/unknown/unknownAsync.ts
function unknownAsync(pipe) {
    return {
        type: 'unknown',
        expects: 'unknown',
        async: true,
        pipe,
        async _parse(input, config) {
            return pipeResultAsync(this, input, config);
        },
    };
}

// src/schemas/variant/variant.ts
function variant(key, options, arg3, arg4) {
    const [message, pipe] = defaultArgs(arg3, arg4);
    let cachedExpectedKey;
    return {
        type: 'variant',
        expects: 'Object',
        async: false,
        key,
        options,
        message,
        pipe,
        _parse(input, config) {
            if (input && typeof input === 'object') {
                if (this.key in input || !cachedExpectedKey) {
                    let expectedKey;
                    let variantResult;
                    const parseOptions = (options2) => {
                        for (const schema of options2) {
                            if (schema.type === 'object') {
                                const keySchema = schema.entries[this.key];
                                const keyResult = keySchema._parse(input[this.key], config);
                                if (!cachedExpectedKey) {
                                    expectedKey ? expectedKey.push(keySchema.expects) : (expectedKey = [keySchema.expects]);
                                }
                                if (!keyResult.issues) {
                                    const dataResult = schema._parse(input, config);
                                    if (!dataResult.issues) {
                                        variantResult = dataResult;
                                        break;
                                    }
                                    if (!variantResult || (!variantResult.typed && dataResult.typed)) {
                                        variantResult = dataResult;
                                    }
                                }
                            } else if (schema.type === 'variant') {
                                parseOptions(schema.options);
                                if (variantResult && !variantResult.issues) {
                                    break;
                                }
                            }
                        }
                    };
                    parseOptions(this.options);
                    cachedExpectedKey = cachedExpectedKey || [...new Set(expectedKey)].join(' | ');
                    if (variantResult) {
                        if (variantResult.typed) {
                            return pipeResult(this, variantResult.output, config, variantResult.issues);
                        }
                        return variantResult;
                    }
                }
                const value2 = input[this.key];
                return schemaIssue(this, variant, value2, config, {
                    expected: cachedExpectedKey,
                    path: [
                        {
                            type: 'object',
                            origin: 'value',
                            input,
                            key: this.key,
                            value: value2,
                        },
                    ],
                });
            }
            return schemaIssue(this, variant, input, config);
        },
    };
}

// src/schemas/variant/variantAsync.ts
function variantAsync(key, options, arg3, arg4) {
    const [message, pipe] = defaultArgs(arg3, arg4);
    let cachedExpectedKey;
    return {
        type: 'variant',
        expects: 'Object',
        async: true,
        key,
        options,
        message,
        pipe,
        async _parse(input, config) {
            if (input && typeof input === 'object') {
                if (this.key in input || !cachedExpectedKey) {
                    let expectedKey;
                    let variantResult;
                    const parseOptions = async (options2) => {
                        for (const schema of options2) {
                            if (schema.type === 'object') {
                                const keySchema = schema.entries[this.key];
                                const keyResult = await keySchema._parse(input[this.key], config);
                                if (!cachedExpectedKey) {
                                    expectedKey ? expectedKey.push(keySchema.expects) : (expectedKey = [keySchema.expects]);
                                }
                                if (!keyResult.issues) {
                                    const dataResult = await schema._parse(input, config);
                                    if (!dataResult.issues) {
                                        variantResult = dataResult;
                                        break;
                                    }
                                    if (!variantResult || (!variantResult.typed && dataResult.typed)) {
                                        variantResult = dataResult;
                                    }
                                }
                            } else if (schema.type === 'variant') {
                                await parseOptions(schema.options);
                                if (variantResult && !variantResult.issues) {
                                    break;
                                }
                            }
                        }
                    };
                    await parseOptions(this.options);
                    cachedExpectedKey = cachedExpectedKey || [...new Set(expectedKey)].join(' | ');
                    if (variantResult) {
                        if (variantResult.typed) {
                            return pipeResultAsync(this, variantResult.output, config, variantResult.issues);
                        }
                        return variantResult;
                    }
                }
                const value2 = input[this.key];
                return schemaIssue(this, variantAsync, value2, config, {
                    expected: cachedExpectedKey,
                    path: [
                        {
                            type: 'object',
                            origin: 'value',
                            input,
                            key: this.key,
                            value: value2,
                        },
                    ],
                });
            }
            return schemaIssue(this, variantAsync, input, config);
        },
    };
}

// src/schemas/void/void.ts
function void_(message) {
    return {
        type: 'void',
        expects: 'void',
        async: false,
        message,
        _parse(input, config) {
            if (input === void 0) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, void_, input, config);
        },
    };
}

// src/schemas/void/voidAsync.ts
function voidAsync(message) {
    return {
        type: 'void',
        expects: 'void',
        async: true,
        message,
        async _parse(input, config) {
            if (input === void 0) {
                return schemaResult(true, input);
            }
            return schemaIssue(this, voidAsync, input, config);
        },
    };
}

// src/methods/keyof/keyof.ts
function keyof(schema) {
    return picklist(Object.keys(schema.entries));
}

// src/methods/merge/merge.ts
function merge(schemas, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return object(
        schemas.reduce((entries, schema) => ({ ...entries, ...schema.entries }), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/merge/mergeAsync.ts
function mergeAsync(schemas, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return objectAsync(
        schemas.reduce((entries, schema) => ({ ...entries, ...schema.entries }), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/omit/omit.ts
function omit(schema, keys, arg3, arg4, arg5) {
    const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
    return object(
        Object.entries(schema.entries).reduce((entries, [key, schema2]) => (keys.includes(key) ? entries : { ...entries, [key]: schema2 }), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/omit/omitAsync.ts
function omitAsync(schema, keys, arg3, arg4, arg5) {
    const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
    return objectAsync(
        Object.entries(schema.entries).reduce((entries, [key, schema2]) => (keys.includes(key) ? entries : { ...entries, [key]: schema2 }), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/parse/parse.ts
function parse(schema, input, config) {
    const result = schema._parse(input, getGlobalConfig(config));
    if (result.issues) {
        throw new ValiError(result.issues);
    }
    return result.output;
}

// src/methods/parse/parseAsync.ts
async function parseAsync(schema, input, config) {
    const result = await schema._parse(input, getGlobalConfig(config));
    if (result.issues) {
        throw new ValiError(result.issues);
    }
    return result.output;
}

// src/methods/partial/partial.ts
function partial(schema, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return object(
        Object.entries(schema.entries).reduce(
            (entries, [key, schema2]) => ({
                ...entries,
                [key]: optional(schema2),
            }),
            {}
        ),
        rest,
        message,
        pipe
    );
}

// src/methods/partial/partialAsync.ts
function partialAsync(schema, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return objectAsync(
        Object.entries(schema.entries).reduce(
            (entries, [key, schema2]) => ({
                ...entries,
                [key]: optionalAsync(schema2),
            }),
            {}
        ),
        rest,
        message,
        pipe
    );
}

// src/methods/pick/pick.ts
function pick(schema, keys, arg3, arg4, arg5) {
    const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
    return object(
        Object.entries(schema.entries).reduce((entries, [key, schema2]) => (keys.includes(key) ? { ...entries, [key]: schema2 } : entries), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/pick/pickAsync.ts
function pickAsync(schema, keys, arg3, arg4, arg5) {
    const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
    return objectAsync(
        Object.entries(schema.entries).reduce((entries, [key, schema2]) => (keys.includes(key) ? { ...entries, [key]: schema2 } : entries), {}),
        rest,
        message,
        pipe
    );
}

// src/methods/required/required.ts
function required(schema, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return object(
        Object.entries(schema.entries).reduce(
            (entries, [key, schema2]) => ({
                ...entries,
                [key]: nonOptional(schema2),
            }),
            {}
        ),
        rest,
        message,
        pipe
    );
}

// src/methods/required/requiredAsync.ts
function requiredAsync(schema, arg2, arg3, arg4) {
    const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
    return objectAsync(
        Object.entries(schema.entries).reduce(
            (entries, [key, schema2]) => ({
                ...entries,
                [key]: nonOptionalAsync(schema2),
            }),
            {}
        ),
        rest,
        message,
        pipe
    );
}

// src/methods/safeParse/safeParse.ts
function safeParse(schema, input, config) {
    const result = schema._parse(input, getGlobalConfig(config));
    return {
        typed: result.typed,
        success: !result.issues,
        output: result.output,
        issues: result.issues,
    };
}

// src/methods/safeParse/safeParseAsync.ts
async function safeParseAsync(schema, input, config) {
    const result = await schema._parse(input, getGlobalConfig(config));
    return {
        typed: result.typed,
        success: !result.issues,
        output: result.output,
        issues: result.issues,
    };
}

// src/methods/transform/transform.ts
function transform(schema, action, arg1) {
    return {
        ...schema,
        _parse(input, config) {
            const result = schema._parse(input, config);
            if (result.issues) {
                result.typed = false;
            } else {
                result.output = action(result.output, { issues: result.issues });
                if (arg1) {
                    if (Array.isArray(arg1)) {
                        return pipeResult({ type: typeof result.output, pipe: arg1 }, result.output, config);
                    }
                    return arg1._parse(result.output, config);
                }
            }
            return result;
        },
    };
}

// src/methods/transform/transformAsync.ts
function transformAsync(schema, action, arg1) {
    return {
        ...schema,
        async: true,
        async _parse(input, config) {
            const result = await schema._parse(input, config);
            if (result.issues) {
                result.typed = false;
            } else {
                result.output = await action(result.output, { issues: result.issues });
                if (arg1) {
                    if (Array.isArray(arg1)) {
                        return pipeResultAsync({ type: typeof result.output, pipe: arg1 }, result.output, config);
                    }
                    return arg1._parse(result.output, config);
                }
            }
            return result;
        },
    };
}

// src/methods/unwrap/unwrap.ts
function unwrap(schema) {
    return schema.wrapped;
}

// src/regex.ts
var BIC_REGEX = /^[A-Z]{6}(?!00)[A-Z\d]{2}(?:[A-Z\d]{3})?$/u;
var CUID2_REGEX = /^[a-z][\da-z]*$/u;
var DECIMAL_REGEX = /^\d+$/u;
var EMAIL_REGEX = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
var EMOJI_REGEX = /^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u;
var HEXADECIMAL_REGEX = /^(0h|0x)?[\da-f]+$/iu;
var HEX_COLOR_REGEX = /^#([\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/iu;
var IMEI_REGEX = /^\d{2}(?:[ /|-]?\d{6}){2}[ /|-]?\d$/u;
var IPV4_REGEX =
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive
    /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u;
var IPV6_REGEX =
    /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu;
var ISO_DATE_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u;
var ISO_DATE_TIME_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_REGEX = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_SECOND_REGEX = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u;
var ISO_TIMESTAMP_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?Z$/u;
var ISO_WEEK_REGEX = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u;
var MAC48_REGEX = /^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$/iu;
var MAC64_REGEX = /^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu;
var OCTAL_REGEX = /^(0o)?[0-7]+$/iu;
var ULID_REGEX = /^[\da-hjkmnp-tv-z]{26}$/iu;
var UUID_REGEX = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;

// src/transformations/toCustom/toCustom.ts
function toCustom(action) {
    return {
        type: 'to_custom',
        async: false,
        _parse(input) {
            return actionOutput(action(input));
        },
    };
}

// src/transformations/toCustom/toCustomAsync.ts
function toCustomAsync(action) {
    return {
        type: 'to_custom',
        async: true,
        async _parse(input) {
            return actionOutput(await action(input));
        },
    };
}

// src/transformations/toLowerCase/toLowerCase.ts
function toLowerCase() {
    return {
        type: 'to_lower_case',
        async: false,
        _parse(input) {
            return actionOutput(input.toLocaleLowerCase());
        },
    };
}

// src/transformations/toMaxValue/toMaxValue.ts
function toMaxValue(requirement) {
    return {
        type: 'to_max_value',
        async: false,
        requirement,
        _parse(input) {
            return actionOutput(input > this.requirement ? this.requirement : input);
        },
    };
}

// src/transformations/toMinValue/toMinValue.ts
function toMinValue(requirement) {
    return {
        type: 'to_min_value',
        async: false,
        requirement,
        _parse(input) {
            return actionOutput(input < this.requirement ? this.requirement : input);
        },
    };
}

// src/transformations/toTrimmed/toTrimmed.ts
function toTrimmed() {
    return {
        type: 'to_trimmed',
        async: false,
        _parse(input) {
            return actionOutput(input.trim());
        },
    };
}

// src/transformations/toTrimmedEnd/toTrimmedEnd.ts
function toTrimmedEnd() {
    return {
        type: 'to_trimmed_end',
        async: false,
        _parse(input) {
            return actionOutput(input.trimEnd());
        },
    };
}

// src/transformations/toTrimmedStart/toTrimmedStart.ts
function toTrimmedStart() {
    return {
        type: 'to_trimmed_start',
        async: false,
        _parse(input) {
            return actionOutput(input.trimStart());
        },
    };
}

// src/transformations/toUpperCase/toUpperCase.ts
function toUpperCase() {
    return {
        type: 'to_upper_case',
        async: false,
        _parse(input) {
            return actionOutput(input.toUpperCase());
        },
    };
}

// src/validations/bic/bic.ts
function bic(message) {
    return {
        type: 'bic',
        expects: null,
        async: false,
        message,
        requirement: BIC_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, bic, input, 'BIC');
        },
    };
}

// src/validations/bytes/bytes.ts
function bytes(requirement, message) {
    return {
        type: 'bytes',
        expects: `${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            const length2 = new TextEncoder().encode(input).length;
            if (length2 === this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, bytes, input, 'bytes', `${length2}`);
        },
    };
}

// src/validations/creditCard/creditCard.ts
var SANITIZE_REGEX = /[- ]+/gu;
var PROVIDER_REGEX_LIST = [
    // American Express
    /^3[47]\d{13}$/u,
    // Diners Club
    /^3(?:0[0-5]|[68]\d)\d{11}$/u,
    // Discover
    /^6(?:011|5\d{2})\d{12,15}$/u,
    // JCB
    /^(?:2131|1800|35\d{3})\d{11}$/u,
    // Mastercard
    /^5[1-5]\d{2}|(222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
    // UnionPay
    /^(6[27]\d{14}|81\d{14,17})$/u,
    // Visa
    /^4\d{12}(?:\d{3,6})?$/u,
];
function creditCard(message) {
    return {
        type: 'credit_card',
        expects: null,
        async: false,
        message,
        requirement: (input) => {
            const sanitized = input.replace(SANITIZE_REGEX, '');
            return PROVIDER_REGEX_LIST.some((regex2) => regex2.test(sanitized)) && isLuhnAlgo(sanitized);
        },
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, creditCard, input, 'credit card');
        },
    };
}

// src/validations/cuid2/cuid2.ts
function cuid2(message) {
    return {
        type: 'cuid2',
        expects: null,
        async: false,
        message,
        requirement: CUID2_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, cuid2, input, 'Cuid2');
        },
    };
}

// src/validations/custom/custom.ts
function custom(requirement, message) {
    return {
        type: 'custom',
        expects: null,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, custom, input, 'input');
        },
    };
}

// src/validations/custom/customAsync.ts
function customAsync(requirement, message) {
    return {
        type: 'custom',
        expects: null,
        async: true,
        message,
        requirement,
        async _parse(input) {
            if (await this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, customAsync, input, 'input');
        },
    };
}

// src/validations/decimal/decimal.ts
function decimal(message) {
    return {
        type: 'decimal',
        expects: null,
        async: false,
        message,
        requirement: DECIMAL_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, decimal, input, 'decimal');
        },
    };
}

// src/validations/email/email.ts
function email(message) {
    return {
        type: 'email',
        expects: null,
        async: false,
        message,
        requirement: EMAIL_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, email, input, 'email');
        },
    };
}

// src/validations/emoji/emoji.ts
function emoji(message) {
    return {
        type: 'emoji',
        expects: null,
        async: false,
        message,
        requirement: EMOJI_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, emoji, input, 'emoji');
        },
    };
}

// src/validations/endsWith/endsWith.ts
function endsWith(requirement, message) {
    return {
        type: 'ends_with',
        expects: `"${requirement}"`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.endsWith(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, endsWith, input, 'end', `"${input.slice(-this.requirement.length)}"`);
        },
    };
}

// src/validations/every/every.ts
function every(requirement, message) {
    return {
        type: 'every',
        expects: null,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.every(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, every, input, 'input');
        },
    };
}

// src/validations/excludes/excludes.ts
function excludes(requirement, message) {
    const received = stringify(requirement);
    return {
        type: 'excludes',
        expects: `!${received}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (!input.includes(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, excludes, input, 'content', received);
        },
    };
}

// src/validations/finite/finite.ts
function finite(message) {
    return {
        type: 'finite',
        expects: null,
        async: false,
        message,
        requirement: Number.isFinite,
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, finite, input, 'finite');
        },
    };
}

// src/validations/hash/hash.ts
var HASH_LENGTHS = {
    md4: 32,
    md5: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8,
    adler32: 8,
};
function hash(types, message) {
    return {
        type: 'hash',
        expects: null,
        async: false,
        message,
        requirement: RegExp(types.map((type) => `^[a-f0-9]{${HASH_LENGTHS[type]}}$`).join('|'), 'iu'),
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, hash, input, 'hash');
        },
    };
}

// src/validations/hexadecimal/hexadecimal.ts
function hexadecimal(message) {
    return {
        type: 'hexadecimal',
        expects: null,
        async: false,
        message,
        requirement: HEXADECIMAL_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, hexadecimal, input, 'hexadecimal');
        },
    };
}

// src/validations/hexColor/hexColor.ts
function hexColor(message) {
    return {
        type: 'hex_color',
        expects: null,
        async: false,
        message,
        requirement: HEX_COLOR_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, hexColor, input, 'hex color');
        },
    };
}

// src/validations/imei/imei.ts
function imei(message) {
    return {
        type: 'imei',
        expects: null,
        async: false,
        message,
        requirement: [IMEI_REGEX, isLuhnAlgo],
        _parse(input) {
            if (this.requirement[0].test(input) && this.requirement[1](input)) {
                return actionOutput(input);
            }
            return actionIssue(this, imei, input, 'IMEI');
        },
    };
}

// src/validations/includes/includes.ts
function includes(requirement, message) {
    const expects = stringify(requirement);
    return {
        type: 'includes',
        expects,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.includes(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, includes, input, 'content', `!${expects}`);
        },
    };
}

// src/validations/integer/integer.ts
function integer(message) {
    return {
        type: 'integer',
        expects: null,
        async: false,
        message,
        requirement: Number.isInteger,
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, integer, input, 'integer');
        },
    };
}

// src/validations/ip/ip.ts
function ip(message) {
    return {
        type: 'ip',
        expects: null,
        async: false,
        message,
        // TODO: It is strange that we have an OR relationship between requirements
        requirement: [IPV4_REGEX, IPV6_REGEX],
        _parse(input) {
            if (this.requirement[0].test(input) || this.requirement[1].test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, ip, input, 'IP');
        },
    };
}

// src/validations/ipv4/ipv4.ts
function ipv4(message) {
    return {
        type: 'ipv4',
        expects: null,
        async: false,
        message,
        requirement: IPV4_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, ipv4, input, 'IPv4');
        },
    };
}

// src/validations/ipv6/ipv6.ts
function ipv6(message) {
    return {
        type: 'ipv6',
        expects: null,
        async: false,
        message,
        requirement: IPV6_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, ipv6, input, 'IPv6');
        },
    };
}

// src/validations/isoDate/isoDate.ts
function isoDate(message) {
    return {
        type: 'iso_date',
        expects: null,
        async: false,
        message,
        requirement: ISO_DATE_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoDate, input, 'date');
        },
    };
}

// src/validations/isoDateTime/isoDateTime.ts
function isoDateTime(message) {
    return {
        type: 'iso_date_time',
        expects: null,
        async: false,
        message,
        requirement: ISO_DATE_TIME_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoDateTime, input, 'date-time');
        },
    };
}

// src/validations/isoTime/isoTime.ts
function isoTime(message) {
    return {
        type: 'iso_time',
        expects: null,
        async: false,
        message,
        requirement: ISO_TIME_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoTime, input, 'time');
        },
    };
}

// src/validations/isoTimeSecond/isoTimeSecond.ts
function isoTimeSecond(message) {
    return {
        type: 'iso_time_second',
        expects: null,
        async: false,
        message,
        requirement: ISO_TIME_SECOND_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoTimeSecond, input, 'time second');
        },
    };
}

// src/validations/isoTimestamp/isoTimestamp.ts
function isoTimestamp(message) {
    return {
        type: 'iso_timestamp',
        expects: null,
        async: false,
        message,
        requirement: ISO_TIMESTAMP_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoTimestamp, input, 'timestamp');
        },
    };
}

// src/validations/isoWeek/isoWeek.ts
function isoWeek(message) {
    return {
        type: 'iso_week',
        expects: null,
        async: false,
        message,
        requirement: ISO_WEEK_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, isoWeek, input, 'week');
        },
    };
}

// src/validations/length/length.ts
function length(requirement, message) {
    return {
        type: 'length',
        expects: `${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.length === this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, length, input, 'length', `${input.length}`);
        },
    };
}

// src/validations/mac/mac.ts
function mac(message) {
    return {
        type: 'mac',
        expects: null,
        async: false,
        message,
        // TODO: It is strange that we have an OR relationship between requirements
        requirement: [MAC48_REGEX, MAC64_REGEX],
        _parse(input) {
            if (this.requirement[0].test(input) || this.requirement[1].test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, mac, input, 'MAC');
        },
    };
}

// src/validations/mac48/mac48.ts
function mac48(message) {
    return {
        type: 'mac48',
        expects: null,
        async: false,
        message,
        requirement: MAC48_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, mac48, input, '48-bit MAC');
        },
    };
}

// src/validations/mac64/mac64.ts
function mac64(message) {
    return {
        type: 'mac64',
        expects: null,
        async: false,
        message,
        requirement: MAC64_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, mac64, input, '64-bit MAC');
        },
    };
}

// src/validations/maxBytes/maxBytes.ts
function maxBytes(requirement, message) {
    return {
        type: 'max_bytes',
        expects: `<=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            const length2 = new TextEncoder().encode(input).length;
            if (length2 <= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, maxBytes, input, 'bytes', `${length2}`);
        },
    };
}

// src/validations/maxLength/maxLength.ts
function maxLength(requirement, message) {
    return {
        type: 'max_length',
        expects: `<=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.length <= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, maxLength, input, 'length', `${input.length}`);
        },
    };
}

// src/validations/maxSize/maxSize.ts
function maxSize(requirement, message) {
    return {
        type: 'max_size',
        expects: `<=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.size <= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, maxSize, input, 'size', `${input.size}`);
        },
    };
}

// src/validations/maxValue/maxValue.ts
function maxValue(requirement, message) {
    return {
        type: 'max_value',
        expects: `<=${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input <= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, maxValue, input, 'value', input instanceof Date ? input.toJSON() : stringify(input));
        },
    };
}

// src/validations/minBytes/minBytes.ts
function minBytes(requirement, message) {
    return {
        type: 'min_bytes',
        expects: `>=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            const length2 = new TextEncoder().encode(input).length;
            if (length2 >= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, minBytes, input, 'bytes', `${length2}`);
        },
    };
}

// src/validations/mimeType/mimeType.ts
function mimeType(requirement, message) {
    return {
        type: 'mime_type',
        expects: requirement.map((option) => `"${option}"`).join(' | '),
        async: false,
        message,
        requirement,
        _parse(input) {
            if (this.requirement.includes(input.type)) {
                return actionOutput(input);
            }
            return actionIssue(this, mimeType, input, 'MIME type');
        },
    };
}

// src/validations/minLength/minLength.ts
function minLength(requirement, message) {
    return {
        type: 'min_length',
        expects: `>=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.length >= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, minLength, input, 'length', `${input.length}`);
        },
    };
}

// src/validations/minSize/minSize.ts
function minSize(requirement, message) {
    return {
        type: 'min_size',
        expects: `>=${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.size >= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, minSize, input, 'size', `${input.size}`);
        },
    };
}

// src/validations/minValue/minValue.ts
function minValue(requirement, message) {
    return {
        type: 'min_value',
        expects: `>=${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input >= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, minValue, input, 'value', input instanceof Date ? input.toJSON() : stringify(input));
        },
    };
}

// src/validations/multipleOf/multipleOf.ts
function multipleOf(requirement, message) {
    return {
        type: 'multiple_of',
        expects: `%${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input % this.requirement === 0) {
                return actionOutput(input);
            }
            return actionIssue(this, multipleOf, input, 'multiple', `${input}`);
        },
    };
}

// src/validations/notBytes/notBytes.ts
function notBytes(requirement, message) {
    return {
        type: 'not_bytes',
        expects: `!${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            const length2 = new TextEncoder().encode(input).length;
            if (length2 !== this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, notBytes, input, 'bytes', `${length2}`);
        },
    };
}

// src/validations/notLength/notLength.ts
function notLength(requirement, message) {
    return {
        type: 'not_length',
        expects: `!${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.length !== this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, notLength, input, 'length', `${input.length}`);
        },
    };
}

// src/validations/notSize/notSize.ts
function notSize(requirement, message) {
    return {
        type: 'not_size',
        expects: `!${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.size !== this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, notSize, input, 'size', `${input.size}`);
        },
    };
}

// src/validations/notValue/notValue.ts
function notValue(requirement, message) {
    return {
        type: 'not_value',
        expects: `!${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input < this.requirement || input > this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, notValue, input, 'value', input instanceof Date ? input.toJSON() : stringify(input));
        },
    };
}

// src/validations/octal/octal.ts
function octal(message) {
    return {
        type: 'octal',
        expects: null,
        async: false,
        message,
        requirement: OCTAL_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, octal, input, 'octal');
        },
    };
}

// src/validations/regex/regex.ts
function regex(requirement, message) {
    return {
        type: 'regex',
        expects: `${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, regex, input, 'format');
        },
    };
}

// src/validations/safeInteger/safeInteger.ts
function safeInteger(message) {
    return {
        type: 'safe_integer',
        expects: null,
        async: false,
        message,
        requirement: Number.isSafeInteger,
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, safeInteger, input, 'safe integer');
        },
    };
}

// src/validations/size/size.ts
function size(requirement, message) {
    return {
        type: 'size',
        expects: `${requirement}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.size === this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, size, input, 'size', `${input.size}`);
        },
    };
}

// src/validations/some/some.ts
function some(requirement, message) {
    return {
        type: 'some',
        expects: null,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.some(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, some, input, 'input');
        },
    };
}

// src/validations/startsWith/startsWith.ts
function startsWith(requirement, message) {
    return {
        type: 'starts_with',
        expects: `"${requirement}"`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input.startsWith(this.requirement)) {
                return actionOutput(input);
            }
            return actionIssue(this, startsWith, input, 'start', `"${input.slice(0, this.requirement.length)}"`);
        },
    };
}

// src/validations/ulid/ulid.ts
function ulid(message) {
    return {
        type: 'ulid',
        expects: null,
        async: false,
        message,
        requirement: ULID_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, ulid, input, 'ULID');
        },
    };
}

// src/validations/url/url.ts
function url(message) {
    return {
        type: 'url',
        expects: null,
        async: false,
        message,
        requirement(input) {
            try {
                new URL(input);
                return true;
            } catch {
                return false;
            }
        },
        _parse(input) {
            if (this.requirement(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, url, input, 'URL');
        },
    };
}

// src/validations/uuid/uuid.ts
function uuid(message) {
    return {
        type: 'uuid',
        expects: null,
        async: false,
        message,
        requirement: UUID_REGEX,
        _parse(input) {
            if (this.requirement.test(input)) {
                return actionOutput(input);
            }
            return actionIssue(this, uuid, input, 'UUID');
        },
    };
}

// src/validations/value/value.ts
function value(requirement, message) {
    return {
        type: 'value',
        expects: `${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
        async: false,
        message,
        requirement,
        _parse(input) {
            if (input <= this.requirement && input >= this.requirement) {
                return actionOutput(input);
            }
            return actionIssue(this, value, input, 'value', input instanceof Date ? input.toJSON() : stringify(input));
        },
    };
}

const Pt = intersect;
const a = {
    BIC_REGEX,
    BrandSymbol,
    CUID2_REGEX,
    DECIMAL_REGEX,
    EMAIL_REGEX,
    EMOJI_REGEX,
    HEXADECIMAL_REGEX,
    HEX_COLOR_REGEX,
    IMEI_REGEX,
    IPV4_REGEX,
    IPV6_REGEX,
    ISO_DATE_REGEX,
    ISO_DATE_TIME_REGEX,
    ISO_TIMESTAMP_REGEX,
    ISO_TIME_REGEX,
    ISO_TIME_SECOND_REGEX,
    ISO_WEEK_REGEX,
    MAC48_REGEX,
    MAC64_REGEX,
    OCTAL_REGEX,
    ULID_REGEX,
    UUID_REGEX,
    ValiError,
    actionIssue,
    actionOutput,
    any,
    anyAsync,
    array,
    arrayAsync,
    bic,
    bigint,
    bigintAsync,
    blob,
    blobAsync,
    boolean,
    booleanAsync,
    brand,
    bytes,
    coerce,
    coerceAsync,
    creditCard,
    cuid2,
    custom,
    customAsync,
    date,
    dateAsync,
    decimal,
    defaultArgs,
    deleteGlobalConfig,
    deleteGlobalMessage,
    deleteSchemaMessage,
    deleteSpecificMessage,
    email,
    emoji,
    endsWith,
    enumAsync,
    enum_,
    every,
    excludes,
    fallback,
    fallbackAsync,
    finite,
    flatten,
    forward,
    forwardAsync,
    getDefault,
    getDefaultAsync,
    getDefaults,
    getDefaultsAsync,
    getFallback,
    getFallbackAsync,
    getFallbacks,
    getFallbacksAsync,
    getGlobalConfig,
    getGlobalMessage,
    getSchemaMessage,
    getSpecificMessage,
    hash,
    hexColor,
    hexadecimal,
    i18n,
    imei,
    includes,
    instance,
    instanceAsync,
    integer,
    intersect,
    intersectAsync,
    ip,
    ipv4,
    ipv6,
    is,
    isLuhnAlgo,
    isOfType,
    isoDate,
    isoDateTime,
    isoTime,
    isoTimeSecond,
    isoTimestamp,
    isoWeek,
    keyof,
    lazy,
    lazyAsync,
    length,
    literal,
    literalAsync,
    mac,
    mac48,
    mac64,
    map,
    mapAsync,
    maxBytes,
    maxLength,
    maxSize,
    maxValue,
    merge,
    mergeAsync,
    mimeType,
    minBytes,
    minLength,
    minSize,
    minValue,
    multipleOf,
    nan,
    nanAsync,
    never,
    neverAsync,
    nonNullable,
    nonNullableAsync,
    nonNullish,
    nonNullishAsync,
    nonOptional,
    nonOptionalAsync,
    notBytes,
    notLength,
    notSize,
    notValue,
    nullAsync,
    null_,
    nullable,
    nullableAsync,
    nullish,
    nullishAsync,
    number,
    numberAsync,
    object,
    objectAsync,
    octal,
    omit,
    omitAsync,
    optional,
    optionalAsync,
    parse,
    parseAsync,
    partial,
    partialAsync,
    pick,
    pickAsync,
    picklist,
    picklistAsync,
    pipeResult,
    pipeResultAsync,
    record,
    recordAsync,
    regex,
    required,
    requiredAsync,
    restAndDefaultArgs,
    safeInteger,
    safeParse,
    safeParseAsync,
    schemaIssue,
    schemaResult,
    set,
    setAsync,
    setGlobalConfig,
    setGlobalMessage,
    setSchemaMessage,
    setSpecificMessage,
    size,
    some,
    special,
    specialAsync,
    startsWith,
    string,
    stringAsync,
    stringify,
    symbol,
    symbolAsync,
    toCustom,
    toCustomAsync,
    toLowerCase,
    toMaxValue,
    toMinValue,
    toTrimmed,
    toTrimmedEnd,
    toTrimmedStart,
    toUpperCase,
    transform,
    transformAsync,
    tuple,
    tupleAsync,
    ulid,
    undefinedAsync,
    undefined_,
    union,
    unionAsync,
    unknown,
    unknownAsync,
    unwrap,
    url,
    uuid,
    value,
    variant,
    variantAsync,
    voidAsync,
    void_,
};

var ft = Object.defineProperty;
var bt = (n, t, e) => (t in n ? ft(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e));
var i = (n, t, e) => (bt(n, typeof t != 'symbol' ? t + '' : t, e), e),
    Re = (n, t, e) => {
        if (!t.has(n)) throw TypeError('Cannot ' + e);
    };
var d = (n, t, e) => (Re(n, t, 'read from private field'), e ? e.call(n) : t.get(n)),
    h = (n, t, e) => {
        if (t.has(n)) throw TypeError('Cannot add the same private member more than once');
        t instanceof WeakSet ? t.add(n) : t.set(n, e);
    },
    v = (n, t, e, o) => (Re(n, t, 'write to private field'), o ? o.call(n, e) : t.set(n, e), e);
var De = (n, t, e, o) => ({
    set _(r) {
        v(n, t, r, e);
    },
    get _() {
        return d(n, t, o);
    },
});
import _ from 'react';
import { useCallback as jt, useEffect as Kt, useRef as Xt } from 'react';
var yt = 'invoke';
function ee(n) {
    return yt in n;
}
function x(n) {
    return n === null;
}
function ge(n) {
    return n === !0 || n === !1;
}
function c(n) {
    return typeof n == 'string';
}
function te(n) {
    return typeof n == 'number' && Number.isFinite(n);
}
function ne(n) {
    return typeof n == 'function';
}
function g(n) {
    return typeof n == 'object' && n !== null && !Array.isArray(n);
}
function he(n) {
    return Array.isArray(n);
}
function oe(n, t) {
    throw t || new Error(n ? `Unexpected value: ${n}` : 'Application entered invalid state');
}
function u(n, ...t) {
    if (n) return;
    let e = Error('Assertion Error' + (t.length > 0 ? ': ' + t.join(' ') : ''));
    if (e.stack)
        try {
            let o = e.stack.split(`
  `);
            o[1]?.includes('assert')
                ? (o.splice(1, 1),
                  (e.stack = o.join(`
  `)))
                : o[0]?.includes('assert') &&
                  (o.splice(0, 1),
                  (e.stack = o.join(`
  `)));
        } catch {}
    throw e;
}
function I(n) {
    return a.optional(n);
}
var we = a.boolean(),
    M = a.number(),
    j = I(M),
    S = a.string(),
    k = I(S);
function m(n) {
    return a.object(n);
}
function fe(n) {
    return I(m(n));
}
function W(...n) {
    return a.union(n.map((t) => a.literal(t)));
}
function Ee(...n) {
    return I(a.union(n.map((t) => a.literal(t))));
}
var Le = (n) => a.instance(n),
    T = a.merge;
var ie = a.record,
    re = a.unknown();
var F = a.union,
    f = a.literal,
    Me = a.special,
    Fe = a.is;
var un = m({ id: S }),
    xt = 'ImageAsset',
    It = '__class';
function se(n) {
    return g(n) ? n[It] === xt : !1;
}
var R,
    K,
    p = class {
        constructor(t, e) {
            i(this, 'id');
            i(this, 'url');
            i(this, 'thumbnailUrl');
            h(this, R, void 0);
            h(this, K, void 0);
            u(ee(e)), (this.url = t.url), v(this, K, e), (this.id = t.id), (this.thumbnailUrl = t.thumbnailUrl);
        }
        async measure() {
            return Wt(this.url);
        }
        async getData() {
            if (d(this, R) && d(this, R).bytes.length > 0) return d(this, R);
            let t = await d(this, K).invoke('getImageData', { id: this.id });
            if (!t) throw new Error('Failed to load image data');
            return v(this, R, t), t;
        }
        async loadBitmap() {
            let { mimeType: t, bytes: e } = await this.getData(),
                o = new Blob([e], { type: t });
            return createImageBitmap(o);
        }
        async loadImage() {
            let t = await this.getData(),
                e = URL.createObjectURL(new Blob([t.bytes]));
            return new Promise((o, r) => {
                let s = new Image();
                (s.onload = () => o(s)), (s.onerror = () => r()), (s.src = e);
            });
        }
    };
(R = new WeakMap()), (K = new WeakMap());
var Nt = m({ name: k }),
    Ve = m({ bytes: Le(Uint8Array), mimeType: S }),
    vt = T([Ve, m({ type: f('bytes') })]),
    St = m({ type: f('url'), url: S }),
    At = F([vt, St]),
    mn = Pt([Nt, At]),
    Oe = m({ svg: S, name: k });
function V(n) {
    return n.type === 'bytes' ? [n.bytes.buffer] : [];
}
async function X(n) {
    return Fe(Ve, n) ? { type: 'bytes', ...n } : n instanceof File ? Tt(n) : { type: 'url', url: n };
}
function Ct(n, t) {
    return { ...n, name: t };
}
function be(n) {
    return Promise.all(
        n.map(async (t) => {
            let e = await X(t.image);
            return Ct(e, t.name);
        })
    );
}
function kt(n) {
    if (!n.startsWith('image/')) throw new Error(`Unsupported mime type: ${n}`);
}
async function Tt(n) {
    return new Promise((t, e) => {
        let o = new FileReader();
        (o.onload = (r) => {
            let s = n.type;
            kt(n.type);
            let l = r.target?.result;
            if (!l || !(l instanceof ArrayBuffer)) {
                e(new Error('Failed to read file, arrayBuffer is null'));
                return;
            }
            let y = new Uint8Array(l);
            t({ bytes: y, mimeType: s, type: 'bytes' });
        }),
            (o.onerror = (r) => {
                e(r);
            }),
            o.readAsArrayBuffer(n);
    });
}
async function Wt(n) {
    let t = n instanceof File,
        e = t ? URL.createObjectURL(n) : n,
        o = new Image();
    return (
        (o.crossOrigin = 'anonymous'),
        (o.src = e),
        await o.decode().finally(() => {
            t && URL.revokeObjectURL(e);
        }),
        { height: o.height, width: o.width }
    );
}
function D(n) {
    if (Dt(n)) return wt(n);
    if (he(n)) return n.map(D);
    if (g(n)) {
        let t = {};
        for (let e in n) t[e] = D(n[e]);
        return t;
    }
    return n;
}
function Ue(n, t) {
    let e = {};
    for (let o in n) e[o] = ye(n[o], t);
    return e;
}
function ye(n, t) {
    if (Rt(n) && n.__class === 'ImageAsset') return new p(n, t);
    if (g(n)) {
        let e = {};
        for (let o in n) e[o] = ye(n[o], t);
        return e;
    }
    return he(n) ? n.map((e) => ye(e, t)) : n;
}
function Rt(n) {
    return !!se(n);
}
function Dt(n) {
    return n instanceof p;
}
function wt(n) {
    if (n instanceof p) return { __class: 'ImageAsset', id: n.id, thumbnailUrl: n.thumbnailUrl, url: n.url };
    oe(n);
}
var Et = (() => {
        let n = null;
        return {
            disableUntilMouseUp: () => {
                if (n) return;
                (n = document.createElement('style')),
                    (n.textContent = '* { pointer-events: none !important; user-select: none !important; -webkit-user-select: none !important; }'),
                    document.head.appendChild(n);
                let t = () => {
                        n && (document.head.removeChild(n), (n = null), r());
                    },
                    e = (s) => {
                        (s.buttons > 0 && s.buttons & 1) || t();
                    },
                    o = () => {
                        t();
                    };
                window.addEventListener('pointerup', e, !0), window.addEventListener('pointermove', e, !0), window.addEventListener('blur', o);
                function r() {
                    window.removeEventListener('pointerup', e, !0),
                        window.removeEventListener('pointermove', e, !0),
                        window.removeEventListener('blur', o);
                }
            },
        };
    })(),
    Be = 5,
    Pe = m({ dragSessionId: S }),
    Lt = T([m({ type: f('svg') }), Oe]),
    Mt = m({ type: f('image'), image: S, name: k, previewImage: k }),
    Ft = m({ type: f('component'), moduleUrl: S, attributes: I(Me(g)), controlAttributes: I(ie(re)) }),
    In = F([Lt, Mt, Ft]),
    He = m({ x: M, y: M }),
    _e = m({ width: M, height: M }),
    Vt = T([He, _e]),
    ze = m({ mouse: He }),
    Ot = m({ elementRect: Vt, svgSize: I(_e) }),
    Nn = T([Pe, Ot, ze]),
    vn = T([Pe, ze]),
    Sn = T([Pe, m({ cancelled: we })]),
    Ut = (() => {
        let n = 1;
        return { next: () => `drag-${n++}` };
    })();
function Ge(n, t, e) {
    u(ee(n));
    let o = document.body.style.cursor,
        r = { type: 'idle' },
        s = document.body,
        l = (P) => {
            if (r.type === 'idle') return;
            let { dragSessionId: C } = r.dragStart;
            r.type === 'dragging' && n.invoke('onDragEnd', { ...P, dragSessionId: C }), (r = { type: 'idle' }), ht();
        },
        y = (P) => {
            if (r.type === 'idle') return;
            let { dragSessionId: C } = r.dragStart;
            if (!(P.buttons > 0 && !!(P.buttons & 1))) {
                l({ cancelled: !1 });
                return;
            }
            let { clientX: z, clientY: G } = P;
            if (r.type === 'pointerDown') {
                let L = z - r.dragStart.mouse.x,
                    Te = G - r.dragStart.mouse.y;
                if (Math.abs(L) < Be && Math.abs(Te) < Be) return;
                (r = { type: 'dragging', dragStart: r.dragStart }),
                    n.invoke('onDragStart', r.dragStart),
                    document.getSelection()?.empty(),
                    Et.disableUntilMouseUp();
            }
            s.setPointerCapture(P.pointerId);
            let pe = { x: z, y: G };
            n.invoke('onDrag', { dragSessionId: C, mouse: pe }).then((L) => {
                r.type === 'dragging' && (document.body.style.cursor = L ?? '');
            });
        },
        Se = (P) => {
            P.key === 'Escape' && l({ cancelled: !0 });
        },
        Ae = () => {
            l({ cancelled: !0 });
        },
        Ce = (P) => {
            l({ cancelled: !0 });
            let C = t.getBoundingClientRect(),
                ke = { x: C.x, y: C.y, width: C.width, height: C.height },
                z,
                G = t.querySelectorAll('svg');
            if (G.length === 1) {
                let We = G.item(0).getBoundingClientRect();
                z = { width: We.width, height: We.height };
            }
            let pe = { x: P.clientX, y: P.clientY },
                L = Ut.next();
            (r = { type: 'pointerDown', dragStart: { dragSessionId: L, elementRect: ke, svgSize: z, mouse: pe } }),
                n.invoke('setDragData', L, e()),
                s.addEventListener('pointermove', y, !0),
                s.addEventListener('pointerup', y, !0),
                window.addEventListener('keydown', Se, !0),
                window.addEventListener('blur', Ae);
        };
    t.addEventListener('pointerdown', Ce);
    function ht() {
        (document.body.style.cursor = o),
            s.removeEventListener('pointermove', y, !0),
            s.removeEventListener('pointerup', y, !0),
            window.removeEventListener('keydown', Se, !0),
            window.removeEventListener('blur', Ae);
    }
    return () => {
        t.removeEventListener('pointerdown', Ce), l({ cancelled: !0 });
    };
}
var Tn = W('default', 'image', 'editImage');
var Bt = { methodResponse: !0, pluginReadyResponse: !0, subscriptionMessage: !0 };
function Ht(n) {
    return c(n) && n in Bt;
}
function je(n) {
    return g(n) && Ht(n['type']);
}
var Ke = ['FrameNode'],
    _t = ['SVGNode', 'WebPageNode', 'SmartComponentNode', 'UnknownNode', 'CodeComponentNode', 'TextNode'],
    Mn = W(...Ke),
    Fn = W(...Ke, ..._t),
    Vn = ie(re),
    N,
    A = class {
        constructor(t, e) {
            i(this, 'id');
            h(this, N, void 0);
            u(c(t.id), 'Node must have an id'), (this.id = t.id), v(this, N, e);
        }
        remove() {
            return d(this, N).removeNode(this.id);
        }
        select() {
            return d(this, N).setSelection([this.id]);
        }
        clone() {
            return d(this, N).cloneNode(this.id);
        }
        setAttributes(t) {
            return d(this, N).setAttributes(this.id, t);
        }
        getRect() {
            return d(this, N).getRect(this.id);
        }
        getParent() {
            return d(this, N).getParent(this.id);
        }
        getChildren() {
            return ae(this) ? Promise.resolve([]) : d(this, N).getChildren(this.id);
        }
        async *walk() {
            if ((yield this, !ae(this))) for (let t of await this.getChildren()) yield* await t.walk();
        }
    };
N = new WeakMap();
var w = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'FrameNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'backgroundColor');
            i(this, 'backgroundImage');
            i(this, 'backgroundGradient');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'borderRadius');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            i(this, 'aspectRatio');
            u(e.__class === 'FrameNode', 'FrameNode must have a __class property'),
                (this.name = e.name ?? null),
                (this.visible = e.visible ?? !0),
                (this.locked = e.locked ?? !1),
                (this.backgroundColor = e.backgroundColor ?? null),
                (this.backgroundImage = e.backgroundImage ? new p(e.backgroundImage, o) : null),
                (this.backgroundGradient = e.backgroundGradient ?? null),
                (this.rotation = e.rotation ?? 0),
                (this.opacity = e.opacity ?? 1),
                (this.borderRadius = e.borderRadius ?? null),
                u(e.position, 'Must have a position'),
                (this.position = e.position),
                (this.left = e.left ?? null),
                (this.right = e.right ?? null),
                (this.top = e.top ?? null),
                (this.bottom = e.bottom ?? null),
                (this.centerX = e.centerX ?? null),
                (this.centerY = e.centerY ?? null),
                (this.width = e.width ?? null),
                (this.height = e.height ?? null),
                (this.maxWidth = e.maxWidth ?? null),
                (this.minWidth = e.minWidth ?? null),
                (this.maxHeight = e.maxHeight ?? null),
                (this.minHeight = e.minHeight ?? null),
                (this.aspectRatio = e.aspectRatio ?? null);
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
    },
    Y = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'TextNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            (this.name = e.name ?? null),
                (this.visible = e.visible ?? !0),
                (this.locked = e.locked ?? !1),
                (this.rotation = e.rotation ?? 0),
                (this.opacity = e.opacity ?? 1),
                u(e.position, 'Must have a position'),
                (this.position = e.position),
                (this.left = e.left ?? null),
                (this.right = e.right ?? null),
                (this.top = e.top ?? null),
                (this.bottom = e.bottom ?? null),
                (this.centerX = e.centerX ?? null),
                (this.centerY = e.centerY ?? null),
                (this.width = e.width ?? null),
                (this.height = e.height ?? null),
                (this.maxWidth = e.maxWidth ?? null),
                (this.minWidth = e.minWidth ?? null),
                (this.maxHeight = e.maxHeight ?? null),
                (this.minHeight = e.minHeight ?? null);
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
    },
    $ = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'SVGNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'svg');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            u(e.svg, 'SVG node must have a non-empty SVG string'),
                (this.name = e.name ?? null),
                (this.visible = e.visible ?? !0),
                (this.locked = e.locked ?? !1),
                (this.svg = e.svg),
                (this.rotation = e.rotation ?? 0),
                (this.opacity = e.opacity ?? 1),
                u(e.position, 'Must have a position'),
                (this.position = e.position ?? null),
                (this.left = e.left ?? null),
                (this.right = e.right ?? null),
                (this.top = e.top ?? null),
                (this.bottom = e.bottom ?? null),
                (this.centerX = e.centerX ?? null),
                (this.centerY = e.centerY ?? null),
                (this.width = e.width ?? null),
                (this.height = e.height ?? null);
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
    },
    q = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'CodeComponentNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'componentIdentifier');
            i(this, 'controlAttributes');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            i(this, 'aspectRatio');
            u(e.componentIdentifier, 'Code component node must have an identifier'),
                (this.name = e.name ?? null),
                (this.visible = e.visible ?? !0),
                (this.locked = e.locked ?? !1),
                (this.componentIdentifier = e.componentIdentifier),
                (this.controlAttributes = Ue(e.controlAttributes ?? {}, o)),
                (this.rotation = e.rotation ?? 0),
                (this.opacity = e.opacity ?? 1),
                u(e.position, 'Must have a position'),
                (this.position = e.position),
                (this.left = e.left ?? null),
                (this.right = e.right ?? null),
                (this.top = e.top ?? null),
                (this.bottom = e.bottom ?? null),
                (this.centerX = e.centerX ?? null),
                (this.centerY = e.centerY ?? null),
                (this.width = e.width ?? null),
                (this.height = e.height ?? null),
                (this.maxWidth = e.maxWidth ?? null),
                (this.minWidth = e.minWidth ?? null),
                (this.maxHeight = e.maxHeight ?? null),
                (this.minHeight = e.minHeight ?? null),
                (this.aspectRatio = e.aspectRatio ?? null);
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
        setControlAttributes(e) {
            return this.setAttributes({ controlAttributes: e });
        }
    },
    Q = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '_class', 'WebPageNode');
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
    },
    J = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'SmartComponentNode');
            i(this, 'name');
            this.name = e.name ?? null;
        }
        clone() {
            return super.clone();
        }
        setAttributes(e) {
            return super.setAttributes(e);
        }
    },
    Z = class extends A {
        constructor(e, o) {
            super(e, o);
            i(this, '__class', 'UnknownNode');
        }
        clone() {
            throw Error('Can not clone unknown node');
        }
        setAttributes(e) {
            throw Error('Can not set attributes on unknown node');
        }
    };
function b(n, t) {
    switch (n.__class) {
        case 'WebPageNode':
            return new Q(n, t);
        case 'SmartComponentNode':
            return new J(n, t);
        case 'CodeComponentNode':
            return new q(n, t);
        case 'FrameNode':
            return new w(n, t);
        case 'SVGNode':
            return new $(n, t);
        case 'TextNode':
            return new Y(n, t);
        case 'UnknownNode':
            return new Z(n, t);
        default:
            return new Z(n, t);
    }
}
function xe(n) {
    return D(n);
}
function Xe(n) {
    return n instanceof w;
}
function Ye(n) {
    return n instanceof Y;
}
function $e(n) {
    return n instanceof $;
}
function de(n) {
    return n instanceof q;
}
function qe(n) {
    return n instanceof Q;
}
function Qe(n) {
    return n instanceof J;
}
function ae(n) {
    return n instanceof Z;
}
function le(n) {
    return !!(Xe(n) || Ye(n) || de(n) || $e(n) || ae(n));
}
function Ie(n) {
    return !!(qe(n) || Qe(n) || ae(n));
}
var O = null;
function Je(n) {
    if (!O) {
        let e = document.createElement('style');
        document.head.appendChild(e), (O = e.sheet);
    }
    if (!O) {
        n();
        return;
    }
    let t = O.insertRule('* { transition: none !important; animation: none !important; }');
    n(),
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                O && O.deleteRule(t);
            });
        });
}
var zt = 0,
    me,
    U,
    E,
    B,
    H,
    ce,
    ue = class {
        constructor({ isTestEnv: t } = {}) {
            h(this, me, 0);
            h(this, U, []);
            h(this, E, void 0);
            h(this, B, new Map());
            h(this, H, void 0);
            h(
                this,
                ce,
                new Promise((t) => {
                    v(this, H, t);
                })
            );
            i(this, 'subscriptions', new Map());
            i(this, 'onMessage', (t) => {
                let e = t.data;
                if (je(e))
                    switch (e.type) {
                        case 'pluginReadyResponse': {
                            if (!t.source) throw new Error("No 'source' on incoming message: " + e.type);
                            u(d(this, H)),
                                d(this, H).call(this, e.mode),
                                this.applyPluginTheme(e.theme),
                                v(this, E, (r, s) => window.parent.postMessage(r, t.origin, s));
                            for (let r of d(this, U)) d(this, E).call(this, ...r);
                            v(this, U, []);
                            break;
                        }
                        case 'methodResponse': {
                            let o = d(this, B).get(e.id);
                            if (!o) throw new Error(`No handler for response with id ${e.id}`);
                            d(this, B).delete(e.id), e.error ? o.reject(e.error) : o.resolve(e.result);
                            break;
                        }
                        case 'subscriptionMessage': {
                            let { topic: o, payload: r } = e,
                                s = this.subscriptions.get(o);
                            if (!s) throw new Error('Received a subscription message but no handler present');
                            for (let l of s) l(r);
                            break;
                        }
                        default:
                            oe(e);
                    }
            });
            i(this, 'applyPluginTheme', (t) => {
                Je(() => {
                    document.body.setAttribute('data-framer-theme', t.mode);
                    for (let e in t.tokens) document.body.style.setProperty(e, t.tokens[e]);
                });
            });
            if (t) return;
            window.addEventListener('message', this.onMessage);
            let e = { type: 'pluginReadySignal', breakingChangesVersion: zt };
            window.parent.postMessage(e, '*'),
                this.subscribe('theme', this.applyPluginTheme),
                window.addEventListener('pointerdown', () => {
                    this.invoke('onPointerDown');
                });
        }
        invoke(t, ...e) {
            return this.invokeTransferable(t, void 0, ...e);
        }
        invokeTransferable(t, e, ...o) {
            return new Promise((r, s) => {
                let l = { args: o, methodName: t, id: De(this, me)._++, type: 'methodInvocation' },
                    y = r;
                d(this, B).set(l.id, { resolve: y, reject: s }), this.queueMessage(l, e);
            });
        }
        subscribe(t, e) {
            this.queueMessage({ type: 'subscribe', topic: t });
            let o = this.subscriptions.get(t) ?? new Set();
            return (
                o.add(e),
                this.subscriptions.set(t, o),
                () => {
                    let r = this.subscriptions.get(t) ?? new Set();
                    r.delete(e), r.size === 0 && this.queueMessage({ type: 'unsubscribe', topic: t }), this.subscriptions.set(t, r);
                }
            );
        }
        queueMessage(t, e) {
            if (!d(this, E)) {
                d(this, U).push([t, e]);
                return;
            }
            d(this, E).call(this, t, e);
        }
        async showUI(t) {
            return this.invoke('showUI', t);
        }
        async hideUI() {
            return this.invoke('hideUI');
        }
        async closePlugin(t, e) {
            return this.invoke('closePlugin', t, e);
        }
        async getMode() {
            return d(this, ce);
        }
        async getCurrentUser() {
            return this.invoke('getCurrentUser');
        }
        async getSelection() {
            return (await this.invoke('getSelection')).map((e) => {
                let o = b(e, this);
                return u(le(o)), o;
            });
        }
        async setSelection(t) {
            let e = c(t) ? [t] : Array.from(t);
            return this.invoke('setSelection', e);
        }
        subscribeToSelection(t) {
            return this.subscribe('selection', (e) => {
                let o = e.map((r) => {
                    let s = b(r, this);
                    return u(le(s)), s;
                });
                t(o);
            });
        }
        async getCanvasRoot() {
            let t = await this.invoke('getCanvasRoot'),
                e = b(t, this);
            return u(Ie(e)), e;
        }
        subscribeToCanvasRoot(t) {
            return this.subscribe('canvasRoot', (e) => {
                let o = b(e, this);
                u(Ie(o)), t(o);
            });
        }
        async getPublishInfo() {
            return this.invoke('getPublishInfo');
        }
        subscribeToPublishInfo(t) {
            return this.subscribe('publishInfo', t);
        }
        async createFrameNode(t, e) {
            let o = xe(t),
                r = await this.invoke('createNode', 'FrameNode', e ?? null, o);
            if (!r) return null;
            let s = b(r, this);
            return u(s instanceof w), s;
        }
        async removeNode(t) {
            return this.invoke('removeNode', t);
        }
        async cloneNode(t) {
            let e = await this.invoke('cloneNode', t);
            return e ? b(e, this) : null;
        }
        async getNode(t) {
            let e = await this.invoke('getNode', t);
            return e ? b(e, this) : null;
        }
        async getParent(t) {
            let e = await this.invoke('getParent', t);
            return e ? b(e, this) : null;
        }
        async getChildren(t) {
            return (await this.invoke('getChildren', t)).map((o) => {
                let r = b(o, this);
                return u(le(r)), r;
            });
        }
        async getRect(t) {
            return this.invoke('getRect', t);
        }
        async setAttributes(t, e) {
            let o = xe(e),
                r = await this.invoke('setAttributes', t, o);
            return r ? b(r, this) : null;
        }
        async setParent(t, e, o) {
            return this.invoke('setParent', t, e, o);
        }
        async getImage() {
            let t = await this.invoke('getImage');
            return t ? new p(t, this) : null;
        }
        subscribeToImage(t) {
            return this.subscribe('image', (e) => {
                if (!e) {
                    t(null);
                    return;
                }
                t(new p(e, this));
            });
        }
        async addImage(t) {
            let e = await X(t instanceof File ? t : t.image),
                o = V(e);
            return this.invokeTransferable('addImage', o, { ...e, name: t?.name });
        }
        async setImage(t) {
            let e = await X(t instanceof File ? t : t.image),
                o = V(e);
            return this.invokeTransferable('setImage', o, { ...e, name: t?.name });
        }
        async uploadImage(t) {
            let e = await X(t instanceof File ? t : t.image),
                o = V(e),
                r = await this.invokeTransferable('uploadImage', o, { ...e, name: t?.name });
            return new p(r, this);
        }
        async addImages(t) {
            let e = await be(t),
                o = e.flatMap(V);
            await this.invokeTransferable('addImages', o, e);
        }
        async uploadImages(t) {
            let e = await be(t),
                o = e.flatMap(V),
                r = await this.invokeTransferable('uploadImages', o, e),
                s = [];
            for (let l of r) s.push(new p(l, this));
            return s;
        }
        async addSVG(t) {
            return this.invoke('addSVG', t);
        }
        async addComponent(t, e, o) {
            let r = D(e),
                s = D(o),
                l = await this.invoke('addComponent', t, g(r) ? r : void 0, g(s) ? s : void 0);
            if (!l) return null;
            let y = b(l, this);
            return u(de(y), 'Code component node must be defined'), y;
        }
        async getText() {
            return this.invoke('getText');
        }
        async setText(t, e) {
            return this.invoke('setText', t, e);
        }
        async addText(t, e) {
            return this.invoke('addText', t, e);
        }
        async setCustomCode(t) {
            return this.invoke('setCustomCode', t);
        }
        async getCustomCode() {
            return this.invoke('getCustomCode');
        }
        subscribeToCustomCode(t) {
            return this.subscribe('customCode', t);
        }
        subscribeToText(t) {
            return this.subscribe('text', t);
        }
        makeDraggable(t, e) {
            return Ge(this, t, e);
        }
    };
(me = new WeakMap()), (U = new WeakMap()), (E = new WeakMap()), (B = new WeakMap()), (H = new WeakMap()), (ce = new WeakMap());
var $n = fe({
        width: j,
        height: j,
        position: Ee('center', 'top left', 'bottom left', 'top right', 'bottom right'),
        title: k,
        resizable: I(F([f(!0), f(!1), f('width'), f('height')])),
        minWidth: j,
        minHeight: j,
    }),
    Gt = W('info', 'success', 'error'),
    qn = fe({ variant: I(Gt) });
var Ne = new ue();
function ve(n, t) {
    let e = Yt(() => (ne(t) ? t() : t));
    Kt(() => {
        let o = n.current;
        if (o instanceof HTMLElement) return Ne.makeDraggable(o, e);
    }, [e]);
}
function Yt(n) {
    let t = Xt(n);
    return (t.current = n), jt((...e) => t.current(...e), []);
}
var $t = _.forwardRef(function ({ data: t, children: e, ...o }, r) {
        let s = _.useRef(null);
        if ((ve(s, t), _.isValidElement(e))) {
            let l = Object.assign({}, o);
            return g(e.props) && Object.assign(l, e.props), (l.ref = Jt(s, r, e.ref)), _.cloneElement(e, l);
        }
        return _.Children.count(e) > 1 && _.Children.only(e), null;
    }),
    qt = 'current';
function Qt(n) {
    return g(n) && qt in n;
}
function Jt(...n) {
    return (t) => {
        for (let e of n) ne(e) ? e(t) : Qt(e) && (e.current = t);
    };
}
var Zt = { fixed: !0, sticky: !0, absolute: !0, relative: !0 },
    Ze = 'position';
function co(n) {
    if (!(Ze in n)) return !1;
    let t = n[Ze];
    return c(t) && Zt[t] === !0;
}
var et = 'top';
function po(n) {
    if (!(et in n)) return !1;
    let t = n[et];
    return c(t) || x(t);
}
var tt = 'width';
function go(n) {
    if (!(tt in n)) return !1;
    let t = n[tt];
    return c(t) || x(t);
}
var nt = 'maxWidth';
function ho(n) {
    if (!(nt in n)) return !1;
    let t = n[nt];
    return c(t) || x(t);
}
var ot = 'aspectRatio';
function fo(n) {
    if (!(ot in n)) return !1;
    let t = n[ot];
    return te(t) || x(t);
}
var it = 'name';
function bo(n) {
    if (!(it in n)) return !1;
    let t = n[it];
    return c(t) || x(t);
}
var rt = 'visible';
function yo(n) {
    if (!(rt in n)) return !1;
    let t = n[rt];
    return ge(t);
}
var st = 'locked';
function Po(n) {
    if (!(st in n)) return !1;
    let t = n[st];
    return ge(t);
}
var at = 'backgroundColor';
function xo(n) {
    if (!(at in n)) return !1;
    let t = n[at];
    return c(t) || x(t);
}
var dt = 'backgroundImage';
function Io(n) {
    if (!(dt in n)) return !1;
    let t = n[dt];
    return t instanceof p || x(t);
}
var lt = 'backgroundImage';
function No(n) {
    if (!(lt in n)) return !1;
    let t = n[lt];
    return t instanceof p ? !1 : se(t) || x(t);
}
var ut = 'backgroundGradient';
function vo(n) {
    if (!(ut in n)) return !1;
    let t = n[ut];
    return c(t) || x(t);
}
var mt = 'rotation';
function So(n) {
    if (!(mt in n)) return !1;
    let t = n[mt];
    return te(t);
}
var ct = 'opacity';
function Ao(n) {
    if (!(ct in n)) return !1;
    let t = n[ct];
    return te(t);
}
var pt = 'borderRadius';
function Co(n) {
    if (!(pt in n)) return !1;
    let t = n[pt];
    return c(t) || x(t);
}
var gt = 'svg';
function ko(n) {
    if (!(gt in n)) return !1;
    let t = n[gt];
    return c(t);
}
export {
    q as CodeComponentNode,
    $t as Draggable,
    w as FrameNode,
    $ as SVGNode,
    J as SmartComponentNode,
    Y as TextNode,
    Q as WebPageNode,
    Ne as framer,
    de as isCodeComponentNode,
    Xe as isFrameNode,
    $e as isSVGNode,
    Qe as isSmartComponentNode,
    Ye as isTextNode,
    qe as isWebPageNode,
    ve as useMakeDraggable,
    fo as withAspectRatio,
    xo as withBackgroundColor,
    vo as withBackgroundGradient,
    Io as withBackgroundImage,
    No as withBackgroundImageData,
    Co as withBorderRadius,
    Po as withLocked,
    bo as withName,
    Ao as withOpacity,
    po as withPins,
    co as withPosition,
    So as withRotation,
    ko as withSVG,
    go as withSize,
    ho as withSizeConstraints,
    yo as withVisible,
};
