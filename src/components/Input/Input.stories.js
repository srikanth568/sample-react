import React from 'react';
import Input from './Input'

export default {
	title:'Input',
	component:Input
}

export const small = () => <Input size="small" placeholder="small"/>
export const medium = () => <Input size="medium" placeholder="medium"/>
export const large = () => <Input size="large" placeholder="large"/>
