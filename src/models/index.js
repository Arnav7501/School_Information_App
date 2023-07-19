// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CoursesInfo, SportsInfo, Carpool, TeachersInfo, CoursesArray, SportsArray, TeachersArray, Post2, Clubinfo, ClubArray, SchoolArray } = initSchema(schema);

export {
  CoursesInfo,
  SportsInfo,
  Carpool,
  TeachersInfo,
  CoursesArray,
  SportsArray,
  TeachersArray,
  Post2,
  Clubinfo,
  ClubArray,
  SchoolArray
};