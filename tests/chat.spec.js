import "@testing-library/jest-dom/extend-expect";
import "angular";
import "angular-mocks";

import { getByText } from "@testing-library/dom";

import App from "../src/app/app.module";

describe('Chat component', function(){

  beforeEach(
    angular.mock.module(App)
  );

  it('should render chat', function(){
    const element = angular.element("<chat></chat>");
    expect(element).toBeDefined();
  });

});
