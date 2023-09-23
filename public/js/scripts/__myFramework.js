
export function getEle(selector)
{
    const element = document.querySelector(selector);
    if (element)
    {
        return element;
    }
    return null;
}

export function getAllEle(selector)
{
    const elements = document.querySelectorAll(selector);
    if (elements)
    {
        return elements;
    }
    return null;
}

