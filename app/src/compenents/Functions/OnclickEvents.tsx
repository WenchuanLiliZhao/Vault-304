export const ClassToggleByIds = (ids: string[], className: string) => () => {
  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i])

    if (element) {
      element?.classList.toggle(className)
    } else {
      console.warn(`Element with id '${ids[i]}' not found.`);
    }
  }
};

export const ClassToggleByClassName = (inputClass: string, toggleClass: string) => () => {
  const targetArray = document.querySelectorAll(`.${inputClass}`)

  for (let i = 0; i < targetArray.length; i++) {
    const element = targetArray[i];
    

    element.classList.toggle(toggleClass)
  }
}