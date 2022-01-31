import React from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useUser} from '../hooks/ApiHooks';
import {Input, Button, Text} from 'react-native-elements';

const RegisterForm = () => {
  const {postUser, checkUsername} = useUser();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      full_name: '',
    },
    mode: "onBlur"
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const userData = await postUser(data);
      console.log('register onSubmit', userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: "This is required!"},
          minLength: {value: 3, message: "Username must be at least 3 characters long"},
          validate: async (value) => {
            try {
              const available = await checkUsername(value);
              if (available) {
                return true;
              } else {
                return "username is already taken!"
              }
            } catch (e) {
              new Error("error");
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Username"
            errorMessage={errors.username && errors.username.message}
          />
        )}
        name="username"
      />
      {errors.username && <Text>{errors.username.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: {value: 5, message: "Password must be at least 5 characters long"},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'This is required.'},
          validate: (value) => {
            const {password} = getValues();
            if (value === password) {
              return true;
            } else {
              return 'Passwords do not match.';
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Confirm Password"
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
            }
          />
        )}
        name="confirmPassword"
      />

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {value: /^\S+@\S+\.\S+$/, message:"Not email"}

        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: {value: 3, message: "Full name has to be at least 3 characters long"}
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
            placeholder="Full name"
          />
        )}
        name="full_name"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
    </View>
  );
};

export default RegisterForm;
