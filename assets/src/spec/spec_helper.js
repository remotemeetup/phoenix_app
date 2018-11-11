import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './support/temp_polyfills';

Enzyme.configure({ adapter: new Adapter() });
