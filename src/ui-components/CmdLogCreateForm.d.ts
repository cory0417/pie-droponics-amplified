/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CmdLogCreateFormInputValues = {
    cmd?: number;
    timestamp?: string;
};
export declare type CmdLogCreateFormValidationValues = {
    cmd?: ValidationFunction<number>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CmdLogCreateFormOverridesProps = {
    CmdLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cmd?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CmdLogCreateFormProps = React.PropsWithChildren<{
    overrides?: CmdLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CmdLogCreateFormInputValues) => CmdLogCreateFormInputValues;
    onSuccess?: (fields: CmdLogCreateFormInputValues) => void;
    onError?: (fields: CmdLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CmdLogCreateFormInputValues) => CmdLogCreateFormInputValues;
    onValidate?: CmdLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function CmdLogCreateForm(props: CmdLogCreateFormProps): React.ReactElement;
