const elapsedTimeCalc = (comparedDate: string) => {
  const currentDate = new Date();
  const specificDate = new Date(comparedDate);

  const timeDifference = currentDate.getTime() - specificDate.getTime();

  const min = 1000 * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;

  if (timeDifference >= week) {
    return `${Math.floor(timeDifference / week)}주 전`;
  } else if (timeDifference >= day) {
    return `${Math.floor(timeDifference / day)}일 전`;
  } else if (timeDifference >= hour) {
    return `${Math.floor(timeDifference / hour)}시간 전`;
  } else if (timeDifference >= min) {
    return `${Math.floor(timeDifference / min)}분 전`;
  } else {
    return `방금 전`;
  }
};

export default elapsedTimeCalc;