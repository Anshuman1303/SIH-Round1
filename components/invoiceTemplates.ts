import { IInvoice } from "@/utils/types";

export default function invoiceTemplate(invoice: IInvoice) {
  const invoiceTemplate1 = `<html>
    <body>
        <table style="border-collapse: collapse; width: 629px">
            <colgroup>
                <col width="10" />
                <col width="42" />
                <col width="105" />
                <col width="182" />
                <col width="110" />
                <col width="115" />
                <col width="65" />
            </colgroup>
            <tbody>
                <tr>
                    <td width="10" height="1"></td>
                    <td width="42" height="1"></td>
                    <td width="105" height="1"></td>
                    <td width="182" height="1"></td>
                    <td width="110" height="1"></td>
                    <td width="115" height="1"></td>
                    <td width="65" height="1"></td>
                </tr>
                <tr>
                    <td
                        id="cell_A1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B2"
                        colspan="6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14pt;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        INVOICE
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE # :
                    </td>
                    <td
                        id="cell_D4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceNumber}
                    </td>
                    <td
                        id="cell_E4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F4"
                        rowspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                </tr>
                <tr>
                    <td
                        id="cell_A6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE DATE:
                    </td>
                    <td
                        id="cell_D6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceDate}
                    </td>
                    <td
                        id="cell_E6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        BILL TO:
                    </td>
                    <td
                        id="cell_D9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        FROM:
                    </td>
                    <td
                        id="cell_F9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C10"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToName}
                    </td>
                    <td
                        id="cell_E10"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromName}
                    </td>
                    <td
                        id="cell_G10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C11"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine1}
                    </td>
                    <td
                        id="cell_E11"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine1}
                    </td>
                    <td
                        id="cell_G11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C12"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine2}
                    </td>
                    <td
                        id="cell_E12"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine2}
                    </td>
                    <td
                        id="cell_G12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C13"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.billToPhone}
                    </td>
                    <td
                        id="cell_E13"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.fromPhone}
                    </td>
                    <td
                        id="cell_G13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C15"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        Description
                    </td>
                    <td
                        id="cell_F15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        Amount
                    </td>
                    <td
                        id="cell_G15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                ${invoice.items?.map(
                  (item) => `
                <tr>
                    <td
                        id="cell_A16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C16"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.description}
                    </td>
                    <td
                        id="cell_F16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.amount}
                    </td>
                    <td
                        id="cell_G16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                `
                )}
                <tr>
                    <td
                        id="cell_A23"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B23"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C23"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F23"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G23"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C29"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        TOTAL
                    </td>
                    <td
                        id="cell_F29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total}
                    </td>
                    <td
                        id="cell_G29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>

                    <td
                        id="cell_D31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
  const invoiceTemplate2 = `<html>
    <body>
        <table
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; width: 620px">
            <colgroup>
                <col width="26" />
                <col width="28" />
                <col width="96" />
                <col width="203" />
                <col width="51" />
                <col width="50" />
                <col width="58" />
                <col width="80" />
                <col width="28" />
            </colgroup>
            <tbody>
                <tr>
                    <td width="26" height="1"></td>
                    <td width="28" height="1"></td>
                    <td width="96" height="1"></td>
                    <td width="203" height="1"></td>
                    <td width="51" height="1"></td>
                    <td width="50" height="1"></td>
                    <td width="58" height="1"></td>
                    <td width="80" height="1"></td>
                    <td width="28" height="1"></td>
                </tr>
                <tr>
                    <td
                        id="cell_A1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B2"
                        colspan="8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14pt;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        INVOICE
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE # :
                    </td>
                    <td
                        id="cell_D4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceNumber}
                    </td>
                    <td
                        id="cell_E4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F4"
                        colspan="2"
                        rowspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                </tr>
                <tr>
                    <td
                        id="cell_A6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE DATE:
                    </td>
                    <td
                        id="cell_D6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceDate}
                    </td>
                    <td
                        id="cell_E6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: middle;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        BILL TO:
                    </td>
                    <td
                        id="cell_D9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        FROM:
                    </td>
                    <td
                        id="cell_F9"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C10"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToName}
                    </td>
                    <td
                        id="cell_E10"
                        colspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromName}
                    </td>
                    <td
                        id="cell_I10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C11"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine1}
                    </td>
                    <td
                        id="cell_E11"
                        colspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        ${invoice.fromAddressLine1}
                    </td>
                    <td
                        id="cell_I11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C12"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine2}
                    </td>
                    <td
                        id="cell_E12"
                        colspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine2}
                    </td>
                    <td
                        id="cell_I12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C13"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.billToPhone}
                    </td>
                    <td
                        id="cell_E13"
                        colspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.fromPhone}
                    </td>
                    <td
                        id="cell_I13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C15"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        Description
                    </td>
                    <td
                        id="cell_F15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        Hours
                    </td>
                    <td
                        id="cell_G15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        Rate
                    </td>
                    <td
                        id="cell_H15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        Amount
                    </td>
                    <td
                        id="cell_I15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                ${invoice.items?.map(
                  (item) => `

                <tr>
                    <td
                        id="cell_A16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C16"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.description}
                    </td>
                    <td
                        id="cell_F16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.hours}
                    </td>
                    <td
                        id="cell_G16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.rate}
                    </td>
                    <td
                        id="cell_H16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.amount}
                    </td>
                    <td
                        id="cell_I16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                `
                )}
                <tr>
                    <td
                        id="cell_A17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C17"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                    <td
                        id="cell_I17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C28"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                    <td
                        id="cell_I28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C29"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        TOTAL
                    </td>
                    <td
                        id="cell_H29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total}
                    </td>
                    <td
                        id="cell_I29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: left;
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                            border-left: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-right: thin solid rgb(0, 0, 0);
                            border-bottom: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
  const companyInvoiceTemplate1 = `<html>
    <body>
        <table
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; width: 659px">
            <colgroup>
                <col width="40" />
                <col width="232" />
                <col width="53" />
                <col width="90" />
                <col width="54" />
                <col width="91" />
                <col width="99" />
            </colgroup>
            <tbody>
                <tr>
                    <td width="40" height="1"></td>
                    <td width="232" height="1"></td>
                    <td width="53" height="1"></td>
                    <td width="90" height="1"></td>
                    <td width="54" height="1"></td>
                    <td width="91" height="1"></td>
                    <td width="99" height="1"></td>
                </tr>
                <tr>
                    <td
                        id="cell_A1"
                        style="
                            padding: 36px 2px 28px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B2"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromName}
                    </td>
                    <td
                        id="cell_E2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 28pt;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F2"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 28pt;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            text-align: left;
                        ">
                        INVOICE
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B3"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: italic;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B4"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F4"
                        rowspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B5"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine1}
                    </td>
                    <td
                        id="cell_D5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B6"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine2}
                    </td>
                    <td
                        id="cell_D6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B7"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.fromPhone}
                    </td>
                    <td
                        id="cell_D7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B8"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B9"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        DATE :
                    </td>
                    <td
                        id="cell_G9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceDate}
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B10"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            background-color: rgb(221, 221, 221);
                            text-align: left;
                        ">
                        BILL TO:
                    </td>
                    <td
                        id="cell_D10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE # :
                    </td>
                    <td
                        id="cell_G10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceNumber}
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B11"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        "></td>
                    <td
                        id="cell_D11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B12"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToName}
                    </td>
                    <td
                        id="cell_D12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B13"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine1}
                    </td>
                    <td
                        id="cell_D13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B14"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine2}
                    </td>
                    <td
                        id="cell_D14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B15"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.billToPhone}
                    </td>
                    <td
                        id="cell_D15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B17"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        DESCRIPTION
                    </td>
                    <td
                        id="cell_G17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        AMOUNT
                    </td>
                </tr>
                ${invoice.items?.map(
                  (item) => `
                <tr>
                    <td
                        id="cell_A18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B18"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.description}
                    </td>
                    <td
                        id="cell_G18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.amount}
                    </td>
                </tr>
                `
                )}
                <tr>
                    <td
                        id="cell_A19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B19"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A20"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B20"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G20"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A21"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B21"
                        colspan="5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G21"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        Subtotal
                    </td>
                    <td
                        id="cell_G30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total}
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B31"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        "></td>
                    <td
                        id="cell_E31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        Tax Rate
                    </td>
                    <td
                        id="cell_G31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                        ">
                        ${invoice.tax}%
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B32"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        Tax
                    </td>
                    <td
                        id="cell_G32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                        ">
                        ${invoice.total * (isNaN(parseFloat(invoice.tax)) ? 0 : parseFloat(invoice.tax) / 100)}
                    </td>
                </tr>
                
                <tr>
                    <td
                        id="cell_A34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B34"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        TOTAL
                    </td>
                    <td
                        id="cell_G34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total * (1 + (isNaN(parseFloat(invoice.tax)) ? 0 : parseFloat(invoice.tax) / 100))}
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C36"
                        colspan="5"
                        rowspan="1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
  const companyInvoiceTemplate2 = `<html>
    <body>
        <table
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; width: 912px">
            <colgroup>
                <col width="40" />
                <col width="194" />
                <col width="128" />
                <col width="60" />
                <col width="65" />
                <col width="95" />
                <col width="90" />
                <col width="80" />
                <col width="80" />
                <col width="80" />
            </colgroup>
            <tbody>
                <tr>
                    <td width="40" height="1"></td>
                    <td width="194" height="1"></td>
                    <td width="128" height="1"></td>
                    <td width="60" height="1"></td>
                    <td width="65" height="1"></td>
                    <td width="95" height="1"></td>
                    <td width="90" height="1"></td>
                    <td width="80" height="1"></td>
                    <td width="80" height="1"></td>
                    <td width="80" height="1"></td>
                </tr>
                <tr>
                    <td
                        id="cell_A1"
                        style="
                            padding: 36px 2px 28px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B2"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromName}
                    </td>
                    <td
                        id="cell_E2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F2"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 28pt;
                            font-family: 'Trebuchet MS';
                            color: rgb(0, 0, 0);
                            text-align: left;
                        ">
                        INVOICE
                    </td>
                    <td
                        id="cell_H2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B3"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: italic;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B4"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F4"
                        rowspan="4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J4"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B5"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine1}
                    </td>
                    <td
                        id="cell_E5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J5"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B6"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.fromAddressLine2}
                    </td>
                    <td
                        id="cell_E6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J6"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B7"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.fromPhone}
                    </td>
                    <td
                        id="cell_E7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J7"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B8"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J8"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B9"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J9"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B10"
                        colspan="2"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            background-color: rgb(221, 221, 221);
                            text-align: left;
                        ">
                        BILL TO:
                    </td>
                    <td
                        id="cell_D10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        DATE:
                    </td>
                    <td
                        id="cell_G10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceDate}
                    </td>
                    <td
                        id="cell_H10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J10"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B11"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        INVOICE # :
                    </td>
                    <td
                        id="cell_G11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.invoiceNumber}
                    </td>
                    <td
                        id="cell_H11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J11"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B12"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToName}
                    </td>
                    <td
                        id="cell_E12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J12"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B13"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine1}
                    </td>
                    <td
                        id="cell_E13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J13"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B14"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        ${invoice.billToAddressLine2}
                    </td>
                    <td
                        id="cell_E14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J14"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B15"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        Phone: ${invoice.billToPhone}
                    </td>
                    <td
                        id="cell_E15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J15"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B16"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J16"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B17"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(0, 0, 0);
                        ">
                        DESCRIPTION
                    </td>
                    <td
                        id="cell_E17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        HOURS
                    </td>
                    <td
                        id="cell_F17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        RATE
                    </td>
                    <td
                        id="cell_G17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            background-color: rgb(221, 221, 221);
                            text-align: center;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                        ">
                        AMOUNT
                    </td>
                    <td
                        id="cell_H17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J17"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                ${invoice.items?.map(
                  (item) => `
                <tr>
                    <td
                        id="cell_A18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>

                    <td
                        id="cell_B18"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.description}
                    </td>
                    <td
                        id="cell_E18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.hours}
                    </td>
                    <td
                        id="cell_F18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.rate}
                    </td>
                    <td
                        id="cell_G18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-top: 1px solid rgb(0, 0, 0);
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        ${item.amount}
                    </td>
                    <td
                        id="cell_H18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J18"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                `
                )}
                <tr>
                    <td
                        id="cell_A19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B19"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                    <td
                        id="cell_H19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J19"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td
                        id="cell_A28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B28"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                    <td
                        id="cell_H28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J28"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B29"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-right: 1px solid rgb(0, 0, 0);
                            border-bottom: 1px solid rgb(0, 0, 0);
                            border-left: 1px solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-right: 1px solid rgb(0, 0, 0);
                        "></td>
                    <td
                        id="cell_H29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J29"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B30"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: center;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: thin solid rgb(0, 0, 0);
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        Subtotal
                    </td>
                    <td
                        id="cell_G30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total}
                    </td>
                    <td
                        id="cell_H30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J30"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B31"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 10pt;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        Tax Rate
                    </td>
                    <td
                        id="cell_G31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                        ">
                        ${invoice.tax}%
                    </td>
                    <td
                        id="cell_H31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J31"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B32"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                        ">
                        Tax
                    </td>
                    <td
                        id="cell_G32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                        ">
                        ${invoice.total * (isNaN(parseFloat(invoice.tax)) ? 0 : parseFloat(invoice.tax) / 100)}
                    </td>
                    <td
                        id="cell_H32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J32"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                
                <tr>
                    <td
                        id="cell_A34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B34"
                        colspan="3"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: normal;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: left;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        TOTAL
                    </td>
                    <td
                        id="cell_G34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-style: normal;
                            font-weight: bold;
                            font-size: small;
                            font-family: 'Trebuchet MS';
                            text-align: right;
                            border-top: 1px solid rgb(0, 0, 0);
                        ">
                        ${invoice.total * (1 + (isNaN(parseFloat(invoice.tax)) ? 0 : parseFloat(invoice.tax) / 100))}
                    </td>
                    <td
                        id="cell_H34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J34"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_D35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: bottom;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10pt;
                            font-family: Arial;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_E35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_F35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_G35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J35"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td
                        id="cell_A36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_B36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_C36"
                        colspan="5"
                        rowspan="1"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_H36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_I36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                    <td
                        id="cell_J36"
                        style="
                            padding: 2px 2px 1px;
                            vertical-align: top;
                            font-size: small;
                            font-family: Verdana, Arial, Helvetica, sans-serif;
                            text-align: right;
                        ">
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
  switch (invoice.invoiceType) {
    case 0:
      return invoiceTemplate1;
    case 1:
      return invoiceTemplate2;
    case 2:
      return companyInvoiceTemplate1;
    case 3:
      return companyInvoiceTemplate2;
  }
}
