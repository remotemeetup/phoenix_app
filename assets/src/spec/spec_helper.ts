import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import './support/temp_polyfills';

Enzyme.configure({ adapter: new Adapter() });
