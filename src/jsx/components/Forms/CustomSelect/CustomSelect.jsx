import React from 'react';
import './CustomSelect.scss';
import './../../../../scss/Reset.scss';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const CustomSelect = ({ control, name, label, options, defaultValue, isClearable, isMulti, required }) => {
	return (
		<div className="cst-sct">
			<label>{label}</label>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				rules={required && { required: required }}
				render={({ field, fieldState }) => (
					<>
						<Select
							{...field}
							className="basic-single"
							classNamePrefix="select"
							options={options}
							isClearable={isClearable}
							isMulti={isMulti}
						/>

						{fieldState?.error && <p style={{ color: 'red' }}>{fieldState?.error.message}</p>}
					</>
				)}
			/>
		</div>
	);
};

export default CustomSelect;
