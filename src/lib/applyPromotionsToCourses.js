export const applyPromotionsToCourses = (coursesArray = [], promotions = []) => {
  return coursesArray.map((course) => {
    // Default values
    let isOnPromo = false;
    let isNew = false;
    let promoDesc = '';

    // Loop through all promotions
    promotions.forEach((promo) => {
      // Handle Discount Promo
      if (
        promo.type === 'discount' &&
        promo.discountedCourses?.includes(course.id)
      ) {
        isOnPromo = true;
        promoDesc = 'Get 10% discount!';
      }

      // Handle New Course Promo
      if (
        promo.type === 'new-course' &&
        promo.newCourses?.includes(course.id)
      ) {
        isNew = true;
        promoDesc = promo.description || 'New course just launched!';
      }
    });

    return {
      ...course,
      isOnPromo,
      isNew,
      promoDesc,
    };
  });
};
