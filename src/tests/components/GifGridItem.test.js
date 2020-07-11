import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas de GifGridItem", () => {
  const title = "Gif example";
  const url =
    "https://media0.giphy.com/media/LrN9NbJNp9SWQ/giphy.gif?cid=1d3f88198f97aabe3d9caa73d8b29bc357ec8a6af0ebf31c&rid=giphy.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe renderizarse <GifGridItem /> de manera correcta", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(`${title.substring(0, 10)}...`);
  });
  test("debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
