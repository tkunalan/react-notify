import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Test() {
    const [value, setValue] = useState();

    const configPhoneTextfield = {
        fullWidth: true,
        variant: "outlined",
        id: "phone_number",
        placeholder: "Phone number",
        autoComplete: "off",
        value: value,
        defaultCountry: window.geoplugin_countryCode() || "LK",
        international: true,
        countryCallingCodeEditable: false,
        onChange: setValue,
        onBlur: onchange,
    };

    console.log(window.geoplugin_countryCode(), "zzz");
    console.log(window.geoplugin_countryName(), "zzz");
    console.log(window.geoplugin_currencyCode(), "zzz");
    console.log(window.geoplugin_currencySymbol_UTF8(), "zzz");

    return (
        <div>
            <PhoneInput {...configPhoneTextfield} style={{width: 400}} />
        </div>
    );
}
