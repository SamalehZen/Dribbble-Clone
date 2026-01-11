import type { MouseEvent } from "react";

export function getClickCoordinates(event: MouseEvent<HTMLElement>): { x: number; y: number } {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    return { x, y };
}

export function getElementCoordinates(element: HTMLElement): { x: number; y: number } {
    const rect = element.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    return { x, y };
}
