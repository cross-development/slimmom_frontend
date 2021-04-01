//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { dailySchema } from 'helpers/validationSchemas';
//Styles
import { Heading, BtnGroup, Button } from './CalculatorCaloriesForm.styles';
import { RadioGroupWrap, RadioGroup, Radio } from './CalculatorCaloriesForm.styles';
import { DailyWrapper, BloodType, Form, Label, Input } from './CalculatorCaloriesForm.styles';

const CalculatorCaloriesForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(dailySchema),
	});

	return (
		<DailyWrapper>
			<Heading>Узнай свою суточную норму калорий</Heading>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label>
					<Input type="text" name="height" autoComplete="off" ref={register} placeholder="Рост *" />
					{errors.height && <span>{errors.height.message}</span>}
				</Label>

				<Label>
					<Input type="text" name="age" ref={register} autoComplete="off" placeholder="Возраст *" />
					{errors.age && <span>{errors.age.message}</span>}
				</Label>

				<Label>
					<Input
						type="text"
						name="weight"
						autoComplete="off"
						ref={register}
						placeholder="Текущий вес *"
					/>
					{errors.weight && <span>{errors.weight.message}</span>}
				</Label>

				<Label>
					<Input
						type="text"
						name="desiredWeight"
						autoComplete="off"
						ref={register}
						placeholder="Желаемый вес *"
					/>
					{errors.desiredWeight && <span>{errors.desiredWeight.message}</span>}
				</Label>

				<RadioGroupWrap>
					<BloodType>Группа крови *</BloodType>

					<RadioGroup>
						<Radio>
							<input id="radio-1" type="radio" value="1" name="bloodType" ref={register} />
							<label htmlFor="radio-1">1</label>
						</Radio>

						<Radio>
							<input id="radio-2" type="radio" value="2" name="bloodType" ref={register} />
							<label htmlFor="radio-2">2</label>
						</Radio>

						<Radio>
							<input id="radio-3" type="radio" value="3" name="bloodType" ref={register} />
							<label htmlFor="radio-3">3</label>
						</Radio>

						<Radio>
							<input id="radio-4" type="radio" value="4" name="bloodType" ref={register} />
							<label htmlFor="radio-4">4</label>
						</Radio>
					</RadioGroup>
				</RadioGroupWrap>

				<BtnGroup>
					<Button type="submit">Похудеть</Button>
				</BtnGroup>
			</Form>
		</DailyWrapper>
	);
};

CalculatorCaloriesForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default CalculatorCaloriesForm;
