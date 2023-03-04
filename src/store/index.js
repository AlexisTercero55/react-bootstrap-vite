/** 03/03/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherSlice';

export default configureStore({
    reducer: {/**slice reducers*/
        weather : weatherReducer,
    },
    devTools: true,
})