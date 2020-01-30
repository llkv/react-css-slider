import React from "react";
import Locale from "~/locale";
import s from "./style.scss";


function CssSlider (props) {
    const articleListWrapped = props.articlesListItems.map((article, index) => {
        return (
            <div className={s.slider__contents + " " + s.slide} key={index} data-testid={"SlideWrapper"}>
                <div className={s.storyThumb}>
                    {article}
                </div>
            </div>
        );
    });
    let paginationArray = [1,2,3,4,5,6,7,8,9,10];
    if(props.articlesListItems && props.articlesListItems.length) {
        paginationArray = paginationArray.slice(0, Math.ceil(props.articlesListItems.length / 3));
    } else {
        paginationArray = [];
    }

    const articleListPagination = paginationArray.map((item, index) => {
        return (
            <input type="radio" name="slider" title={`slide${index+1}`} className={s.slider__nav}  key={index} defaultChecked={index === 0} />
        );
    });

    return (
        <div className={s.slider + " " + s.cssSlider + " " + s.slider5} data-testid={"CssSlider"}>
            <div  className={s.link}>
                <a href={Locale.language.url.news.latest}>{Locale.language.newsList.lbl_moreNews}</a>
            </div>
            {articleListPagination}
            <div className={s.slider__inner}>
                {articleListWrapped}
            </div>
        </div>
    );
}

export default CssSlider;