//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import { Container } from 'components/Commons';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { dailySchema } from 'helpers/validationSchemas';
//Styles
import { Heading, BtnGroup, Button, InputWrap } from './CalculatorCaloriesForm.styles';
import { Message, RadioGroupWrap, RadioGroup, Radio } from './CalculatorCaloriesForm.styles';
import { DailyWrapper, BloodType, Form, Label, Input } from './CalculatorCaloriesForm.styles';

const CalculatorCaloriesForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(dailySchema),
	});

	return (
		<Container>
			<DailyWrapper>
				<Heading>Узнай свою суточную норму калорий</Heading>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputWrap>
						<Label>
							<Input
								type="number"
								name="height"
								autoComplete="off"
								ref={register({ setValueAs: v => Number(v) })}
								placeholder="Рост *"
							/>
							{<Message>{errors.height?.message}</Message>}
						</Label>

						<Label>
							<Input
								type="number"
								name="age"
								ref={register({ setValueAs: v => Number(v) })}
								autoComplete="off"
								placeholder="Возраст *"
							/>
							{<Message>{errors.age?.message}</Message>}
						</Label>

						<Label>
							<Input
								type="number"
								name="weight"
								autoComplete="off"
								ref={register({ setValueAs: v => Number(v) })}
								placeholder="Текущий вес *"
							/>
							{<Message>{errors.weight?.message}</Message>}
						</Label>
					</InputWrap>

					<InputWrap>
						<Label>
							<Input
								type="number"
								name="desiredWeight"
								autoComplete="off"
								ref={register({ setValueAs: v => Number(v) })}
								placeholder="Желаемый вес *"
							/>
							{<Message>{errors.desiredWeight?.message}</Message>}
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
					</InputWrap>

					<BtnGroup>
						<Button type="submit">Похудеть</Button>
					</BtnGroup>
				</Form>
			</DailyWrapper>
		</Container>
	);
};

CalculatorCaloriesForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default CalculatorCaloriesForm;
