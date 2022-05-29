import { Category } from '../types/Category';

export const categories : Category = {
  food: { title: 'Alimentação', color: 'blue', expense: true },
  rent: { title: 'Aluguel', color: 'brown', expense: true },
  energy: { title: 'Energia', color: 'yellow', expense: true },
  water: { title: 'Água', color: 'violet', expense: true },
  internet: { title: 'Internet', color: 'orange', expense: true },
  car: { title: 'Carro', color: 'red', expense: true },
  cmaintenance: { title: 'Manutenção', color: 'red', expense: true },
  outher: { title: 'Outros', color: 'red', expense: true },
  salary: { title: 'Salário', color: 'green', expense: false },
  salaryExtra: { title: 'Ganho Extra', color: 'green', expense: false }
}