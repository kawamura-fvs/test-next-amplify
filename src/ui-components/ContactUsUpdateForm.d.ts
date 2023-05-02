/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContactUs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUsUpdateFormInputValues = {
    title?: string;
    detail?: string;
    contact_type?: number;
    isResolve?: boolean;
    updated_at?: string;
};
export declare type ContactUsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    detail?: ValidationFunction<string>;
    contact_type?: ValidationFunction<number>;
    isResolve?: ValidationFunction<boolean>;
    updated_at?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsUpdateFormOverridesProps = {
    ContactUsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    detail?: PrimitiveOverrideProps<TextFieldProps>;
    contact_type?: PrimitiveOverrideProps<TextFieldProps>;
    isResolve?: PrimitiveOverrideProps<SwitchFieldProps>;
    updated_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactUs?: ContactUs;
    onSubmit?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onSuccess?: (fields: ContactUsUpdateFormInputValues) => void;
    onError?: (fields: ContactUsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onValidate?: ContactUsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsUpdateForm(props: ContactUsUpdateFormProps): React.ReactElement;
