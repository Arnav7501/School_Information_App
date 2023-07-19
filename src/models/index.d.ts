import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type CoursesInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SportsInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarpoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeachersInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoursesArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SportsArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeachersArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Post2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubinfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolArrayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CoursesInfo {
  readonly id: string;
  readonly Description?: string | null;
  readonly Rigor?: string | null;
  readonly Teachers?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoursesInfo, CoursesInfoMetaData>);
  static copyOf(source: CoursesInfo, mutator: (draft: MutableModel<CoursesInfo, CoursesInfoMetaData>) => MutableModel<CoursesInfo, CoursesInfoMetaData> | void): CoursesInfo;
}

export declare class SportsInfo {
  readonly id: string;
  readonly MeetingTimes?: string | null;
  readonly Description?: string | null;
  readonly HowToSignUp?: string | null;
  readonly TimeCommitment?: string | null;
  readonly Image?: string | null;
  readonly Identifier?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SportsInfo, SportsInfoMetaData>);
  static copyOf(source: SportsInfo, mutator: (draft: MutableModel<SportsInfo, SportsInfoMetaData>) => MutableModel<SportsInfo, SportsInfoMetaData> | void): SportsInfo;
}

export declare class Carpool {
  readonly id: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly latitudeDelta?: number | null;
  readonly longitudeDelta?: number | null;
  readonly identifier?: string | null;
  readonly location?: string | null;
  readonly person_who_posted?: string | null;
  readonly longitude2?: number | null;
  readonly latitude2?: number | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Carpool, CarpoolMetaData>);
  static copyOf(source: Carpool, mutator: (draft: MutableModel<Carpool, CarpoolMetaData>) => MutableModel<Carpool, CarpoolMetaData> | void): Carpool;
}

export declare class TeachersInfo {
  readonly id: string;
  readonly classes?: string | null;
  readonly description?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TeachersInfo, TeachersInfoMetaData>);
  static copyOf(source: TeachersInfo, mutator: (draft: MutableModel<TeachersInfo, TeachersInfoMetaData>) => MutableModel<TeachersInfo, TeachersInfoMetaData> | void): TeachersInfo;
}

export declare class CoursesArray {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoursesArray, CoursesArrayMetaData>);
  static copyOf(source: CoursesArray, mutator: (draft: MutableModel<CoursesArray, CoursesArrayMetaData>) => MutableModel<CoursesArray, CoursesArrayMetaData> | void): CoursesArray;
}

export declare class SportsArray {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SportsArray, SportsArrayMetaData>);
  static copyOf(source: SportsArray, mutator: (draft: MutableModel<SportsArray, SportsArrayMetaData>) => MutableModel<SportsArray, SportsArrayMetaData> | void): SportsArray;
}

export declare class TeachersArray {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TeachersArray, TeachersArrayMetaData>);
  static copyOf(source: TeachersArray, mutator: (draft: MutableModel<TeachersArray, TeachersArrayMetaData>) => MutableModel<TeachersArray, TeachersArrayMetaData> | void): TeachersArray;
}

export declare class Post2 {
  readonly id: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly number_of_likes?: number | null;
  readonly number_of_shares?: number | null;
  readonly name?: string | null;
  readonly reports?: number | null;
  readonly rating?: number | null;
  readonly identifier?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post2, Post2MetaData>);
  static copyOf(source: Post2, mutator: (draft: MutableModel<Post2, Post2MetaData>) => MutableModel<Post2, Post2MetaData> | void): Post2;
}

export declare class Clubinfo {
  readonly id: string;
  readonly identifier?: string | null;
  readonly Presidents?: string | null;
  readonly MeetingTimes?: string | null;
  readonly HowToSignUp?: string | null;
  readonly TimeCommitment?: string | null;
  readonly DescriptionOfClub?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Clubinfo, ClubinfoMetaData>);
  static copyOf(source: Clubinfo, mutator: (draft: MutableModel<Clubinfo, ClubinfoMetaData>) => MutableModel<Clubinfo, ClubinfoMetaData> | void): Clubinfo;
}

export declare class ClubArray {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubArray, ClubArrayMetaData>);
  static copyOf(source: ClubArray, mutator: (draft: MutableModel<ClubArray, ClubArrayMetaData>) => MutableModel<ClubArray, ClubArrayMetaData> | void): ClubArray;
}

export declare class SchoolArray {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SchoolArray, SchoolArrayMetaData>);
  static copyOf(source: SchoolArray, mutator: (draft: MutableModel<SchoolArray, SchoolArrayMetaData>) => MutableModel<SchoolArray, SchoolArrayMetaData> | void): SchoolArray;
}