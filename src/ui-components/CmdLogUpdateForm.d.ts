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
export declare type CmdLogUpdateFormInputValues = {
    cmd?: number;
    timestamp?: string;
};
export declare type CmdLogUpdateFormValidationValues = {
    cmd?: ValidationFunction<number>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CmdLogUpdateFormOverridesProps = {
    CmdLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cmd?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CmdLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: CmdLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cmdLog?: any;
    onSubmit?: (fields: CmdLogUpdateFormInputValues) => CmdLogUpdateFormInputValues;
    onSuccess?: (fields: CmdLogUpdateFormInputValues) => void;
    onError?: (fields: CmdLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CmdLogUpdateFormInputValues) => CmdLogUpdateFormInputValues;
    onValidate?: CmdLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CmdLogUpdateForm(props: CmdLogUpdateFormProps): React.ReactElement;
