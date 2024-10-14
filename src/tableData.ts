import type {DataSource} from "@/type";

const getObject = (): DataSource => {
  return {
    Probability: 40,
    UniversityName: 'UTM',
    Id: 123
  }
}

export const getData = (): DataSource[] => {
  return [
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
    getObject(),
  ]
}
