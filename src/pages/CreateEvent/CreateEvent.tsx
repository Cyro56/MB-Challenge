/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {ScrollView, View} from 'react-native';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
  SubmitButtonText,
} from './CreateEvent.styles';
import {Calendar} from 'react-native-calendars';
import {EventDBService} from '../../DataBases/EventDB.service';
import {toTimeStamp} from '../../components/utils/toTimeStamp';
import Toast from 'react-native-toast-message';
import Footer from '../../components/Footer/Footer';

export const CreateEvent = () => {
  const [selected, setSelected] = useState<string>('');
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];

  const initialValues = {
    name: '',
    local: '',
    time: '',
    hour: '',
    image: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome do evento é obrigatório'),
    local: Yup.string().required('Local do evento é obrigatório'),

    hour: Yup.string()
      .required('Horário do Evento é Obrigatório')
      .test(
        'is-valid-hour',
        'Horário inválido. Use o formato HH:mm (por exemplo, 18:00).',
        value => {
          if (!value) {
            return false;
          }

          const pattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
          return pattern.test(value);
        },
      ),
  });

  const handleCreate = (values: {
    hour: string;
    name: string;
    local: string;
  }) => {
    const formaterTime = `${selected} ${values.hour}`;
    const time = toTimeStamp(formaterTime);
    const newEvent = {
      id: 'id-aleatório-uuid',
      name: values.name,
      local: values.local,
      time: time,
      image:
        'https://th.bing.com/th/id/OIP.Nr5wdRzn-3arG4zyw30D8QHaD8?pid=ImgDet&rs=1',
    };
    const eventDBService = EventDBService.getInstance();
    eventDBService.createEvent(newEvent);
    Toast.show({
      type: 'success',
      position: 'top',
      visibilityTime: 3000,
      text1: 'Novo Evento Criado ',
    });
  };

  return (
    <ScrollView>
      <Container>
        <Title>Criar Evento</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreate}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <FormGroup>
                <Label>Nome do Evento:</Label>
                <Input
                  placeholder="Nome do Evento"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                <ErrorText>
                  <ErrorMessage name="name" />
                </ErrorText>
              </FormGroup>
              <FormGroup>
                <Label>Local do Evento:</Label>
                <Input
                  placeholder="Local do Evento"
                  value={values.local}
                  onChangeText={handleChange('local')}
                  onBlur={handleBlur('local')}
                />
                <ErrorText>
                  <ErrorMessage name="local" />
                </ErrorText>
              </FormGroup>
              <FormGroup>
                <Label>data do Evento:</Label>
                <Calendar
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                    },
                  }}
                  minDate={currentDateString}
                />
                <ErrorText>
                  <ErrorMessage name="time" />
                </ErrorText>
              </FormGroup>
              <FormGroup>
                <Label>Hora do Evento:</Label>
                <Input
                  placeholder="Hora do Evento, ex: 18:00"
                  value={values.hour}
                  onChangeText={handleChange('hour')}
                  onBlur={handleBlur('hour')}
                />
                <ErrorText>
                  <ErrorMessage name="hour" />
                </ErrorText>
              </FormGroup>

              <SubmitButton onPress={() => handleSubmit()}>
                <SubmitButtonText>Criar Evento</SubmitButtonText>
              </SubmitButton>
            </View>
          )}
        </Formik>
      </Container>
      <Footer />
    </ScrollView>
  );
};
