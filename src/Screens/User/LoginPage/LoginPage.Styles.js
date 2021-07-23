import styled from "styled-components"
import {FlexColumn, } from "../../../App.Styles"
import{Field } from 'formik'

export const FormBox= styled(FlexColumn)`
width:398px;
justify-content:start

`
export const LoginImg= styled("img")`
width:849px;
height:auto;
object-fit:cover;
`
export const Input= styled(Field)`
outline:none;
height:40px;
border-radius: 6px;
font-size: 14px;
padding:11px;
color:#787878;
width: 100%;
margin-bottom: 25px;

&::placeholder{
    outline: none;
    /* border:1px solid #242424; */
};

`

export const ErrorMessage= styled("span")`
color:red;
margin :0 0 10px;
display:felx;
justify-content: start;

`
export const LineSeprator= styled("hr")`
width:100%;
margin:30px 0 40px 0;
`