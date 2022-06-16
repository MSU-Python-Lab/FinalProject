export interface CommonResponse<T> {
    success: boolean,
    data: T
}

export interface CommonResponseError {
    success: boolean,
    data: ErrorBackend[] | string | ErrorBackend | undefined
}

export interface ErrorBackend {
    code: number,
    message: string
}