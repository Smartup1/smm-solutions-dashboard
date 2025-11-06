const joinClasses = (baseClass, customClass) => {
  if (typeof customClass !== 'string') return baseClass; 

  return `${baseClass.trim()} ${customClass.trim()}`;
}

export { joinClasses };