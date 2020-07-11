import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toBe(value);
  });

  test("No debe de cambiar la información con Enter", () => {
    const input = wrapper.find("input");
    input.simulate("keypress", { key: "Enter" });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find("input");
    const value = "Hola mundo";
    // Agregar texto al input
    input.simulate("change", { target: { value } });
    const inputAfter = wrapper.find("input");
    // Probar si se agrego el texto
    expect(inputAfter.prop("value")).toBe(value);
    // Presionar enter
    inputAfter.simulate("keypress", { key: "Enter" });
    // Probar si se llamo la funcion
    // Diferentes maneras
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    const inputCleared = wrapper.find("input");
    // Probar que el input se limpió
    expect(inputCleared.prop("value")).toBe("");
  });
});
