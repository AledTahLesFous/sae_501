// src/stores.js
import { writable } from 'svelte/store';

// Contrôle global de la visibilité des textbox
export const textboxVisible = writable(true);
