export const shortDateFormatter = (dateStr) => {
  try {

    const date = new Date(dateStr);

    // Options for formatting the date
    const options = { month: "long", day: "numeric" };

    // Convert the date
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  } catch (error) {
    console.log(error);
    return "-";
  }
};

export const longDateFormatter = (dateStr) => {
  try {

    const date = new Date(dateStr);

    // Options for formatting the date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };

    // Convert the date
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  } catch (error) {
    console.log(error);
    return "-";
  }
}

export const monthYearFormatter = (dateStr) => {
  try {

    const date = new Date(dateStr);

    // Options for formatting the date
    const options = { month: 'long', year: 'numeric' };

    // Convert the date
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  } catch (error) {
    console.log(error);
    return "-";
  }
}

// Create a function that takes data and a 
