/* src/hooks */
//importando as dependências necessárias
import {useState, useEffect} from 'react';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';

export const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState<string>();
  const [coord, setCoord] = useState<any>({});

  useEffect(() => {
    (async function loadPosition() {
      const result = requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      ]).then(statuses => {
        const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
        const statusBack =
          statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION];
        if (Number(Platform.Version) < 29) {
          if (statusFine === 'granted') {
            return true;
          } else {
            setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
          }
        }

        if (statusFine === 'granted' && statusBack === 'granted') {
          return true;
        } else {
          setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
        }
      });
    })();
  }, []);
  return {coord, errorMsg};
};
