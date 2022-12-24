import PropTypes from 'prop-types';

const RatingReview = ({ star, setStar }) => {
  return (
    <div className="w-56">
      <div className="h-9 relative text-4xl inline-block before:content-['★★★★★'] before:block">
        <div className="absolute w-full h-full top-0 left-0 flex flex-row-reverse overflow-hidden">
          <input
            id="rating_review_5"
            className="review_item absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review"
            value="5"
            onChange={(e) => setStar(e.target.value)}
          />
          <label
            htmlFor="rating_review_5"
            className={
              star
                ? "review_label flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_4"
            className="review_item absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review"
            value="4"
            onChange={(e) => setStar(e.target.value)}
          />
          <label
            htmlFor="rating_review_4"
            className={
              star
                ? "review_label flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_3"
            className="review_item absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review"
            value="3"
            onChange={(e) => setStar(e.target.value)}
          />
          <label
            htmlFor="rating_review_3"
            className={
              star
                ? "review_label flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_2"
            className="review_item absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review"
            value="2"
            onChange={(e) => setStar(e.target.value)}
          />
          <label
            htmlFor="rating_review_2"
            className={
              star
                ? "review_label flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_1"
            className="review_item absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review"
            value="1"
            onChange={(e) => setStar(e.target.value)}
          />
          <label
            htmlFor="rating_review_1"
            className={
              star
                ? "review_label flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
        </div>
      </div>
    </div>
  );
};

RatingReview.propsTypes = {
  star: PropTypes.string.isRequired,
  setStar: PropTypes.func.isRequired,
};
