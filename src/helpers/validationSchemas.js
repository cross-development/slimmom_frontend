//Packages
import * as yup from 'yup';

const signInSchema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле должно быть заполнено.'),
	password: yup
		.string()
		.min(4, 'Пароль должен быть более 4 символов.')
		.max(30, 'Пароль должен быть менее 30 символов.')
		.required('Поле должно быть заполнено.'),
});

const signUpSchema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле должно быть заполнено.'),
	password: yup
		.string()
		.min(4, 'Пароль должен быть более 4 символов.')
		.max(30, 'Пароль должен быть менее 30 символов.')
		.required('Поле должно быть заполнено.'),
	username: yup
		.string()
		.min(4, 'Имя должно быть более 4 символов.')
		.max(20, 'Имя должно быть менее 20 символов.')
		.required('Поле должно быть заполнено.'),
});

const dailySchema = yup.object().shape({
	weight: yup
		.number()
		.min(60, 'Минимальный вес 60 кг')
		.max(250, 'Максимальный вес 250 кг')
		.required('Введите вес от 60 до 250 кг'),
	height: yup
		.number()
		.min(100, 'Минимальный рост 100 см')
		.max(250, 'Максимальный рост 250 см')
		.required('Введите рост от 100 до 250 см'),
	age: yup
		.number()
		.min(16, 'Минимальный возраст 16 лет')
		.max(100, 'Максимальный возраст 100 лет')
		.required('Введите возраст от 16 до 100 лет'),
	desiredWeight: yup
		.number()
		.min(50, 'Минимальный вес 50 кг')
		.max(250, 'Максимальный вес 250 кг')
		.required('Введите желаемый вес от 50 до 250 кг'),
	bloodType: yup.number().min(1).max(4).required('Выберите Вашу группу крови.'),
});

export { signInSchema, signUpSchema, dailySchema };
