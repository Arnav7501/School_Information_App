import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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

type EagerCoursesInfo = {
  readonly id: string;
  readonly Description?: string | null;
  readonly Rigor?: string | null;
  readonly Teachers?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoursesInfo = {
  readonly id: string;
  readonly Description?: string | null;
  readonly Rigor?: string | null;
  readonly Teachers?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoursesInfo = LazyLoading extends LazyLoadingDisabled ? EagerCoursesInfo : LazyCoursesInfo

export declare const CoursesInfo: (new (init: ModelInit<CoursesInfo, CoursesInfoMetaData>) => CoursesInfo) & {
  copyOf(source: CoursesInfo, mutator: (draft: MutableModel<CoursesInfo, CoursesInfoMetaData>) => MutableModel<CoursesInfo, CoursesInfoMetaData> | void): CoursesInfo;
}

type EagerSportsInfo = {
  readonly id: string;
  readonly MeetingTimes?: string | null;
  readonly Description?: string | null;
  readonly HowToSignUp?: string | null;
  readonly TimeCommitment?: string | null;
  readonly Image?: string | null;
  readonly Identifier?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySportsInfo = {
  readonly id: string;
  readonly MeetingTimes?: string | null;
  readonly Description?: string | null;
  readonly HowToSignUp?: string | null;
  readonly TimeCommitment?: string | null;
  readonly Image?: string | null;
  readonly Identifier?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SportsInfo = LazyLoading extends LazyLoadingDisabled ? EagerSportsInfo : LazySportsInfo

export declare const SportsInfo: (new (init: ModelInit<SportsInfo, SportsInfoMetaData>) => SportsInfo) & {
  copyOf(source: SportsInfo, mutator: (draft: MutableModel<SportsInfo, SportsInfoMetaData>) => MutableModel<SportsInfo, SportsInfoMetaData> | void): SportsInfo;
}

type EagerCarpool = {
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
}

type LazyCarpool = {
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
}

export declare type Carpool = LazyLoading extends LazyLoadingDisabled ? EagerCarpool : LazyCarpool

export declare const Carpool: (new (init: ModelInit<Carpool, CarpoolMetaData>) => Carpool) & {
  copyOf(source: Carpool, mutator: (draft: MutableModel<Carpool, CarpoolMetaData>) => MutableModel<Carpool, CarpoolMetaData> | void): Carpool;
}

type EagerTeachersInfo = {
  readonly id: string;
  readonly classes?: string | null;
  readonly description?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeachersInfo = {
  readonly id: string;
  readonly classes?: string | null;
  readonly description?: string | null;
  readonly identifier?: string | null;
  readonly Image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeachersInfo = LazyLoading extends LazyLoadingDisabled ? EagerTeachersInfo : LazyTeachersInfo

export declare const TeachersInfo: (new (init: ModelInit<TeachersInfo, TeachersInfoMetaData>) => TeachersInfo) & {
  copyOf(source: TeachersInfo, mutator: (draft: MutableModel<TeachersInfo, TeachersInfoMetaData>) => MutableModel<TeachersInfo, TeachersInfoMetaData> | void): TeachersInfo;
}

type EagerCoursesArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoursesArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoursesArray = LazyLoading extends LazyLoadingDisabled ? EagerCoursesArray : LazyCoursesArray

export declare const CoursesArray: (new (init: ModelInit<CoursesArray, CoursesArrayMetaData>) => CoursesArray) & {
  copyOf(source: CoursesArray, mutator: (draft: MutableModel<CoursesArray, CoursesArrayMetaData>) => MutableModel<CoursesArray, CoursesArrayMetaData> | void): CoursesArray;
}

type EagerSportsArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySportsArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SportsArray = LazyLoading extends LazyLoadingDisabled ? EagerSportsArray : LazySportsArray

export declare const SportsArray: (new (init: ModelInit<SportsArray, SportsArrayMetaData>) => SportsArray) & {
  copyOf(source: SportsArray, mutator: (draft: MutableModel<SportsArray, SportsArrayMetaData>) => MutableModel<SportsArray, SportsArrayMetaData> | void): SportsArray;
}

type EagerTeachersArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeachersArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeachersArray = LazyLoading extends LazyLoadingDisabled ? EagerTeachersArray : LazyTeachersArray

export declare const TeachersArray: (new (init: ModelInit<TeachersArray, TeachersArrayMetaData>) => TeachersArray) & {
  copyOf(source: TeachersArray, mutator: (draft: MutableModel<TeachersArray, TeachersArrayMetaData>) => MutableModel<TeachersArray, TeachersArrayMetaData> | void): TeachersArray;
}

type EagerPost2 = {
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
}

type LazyPost2 = {
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
}

export declare type Post2 = LazyLoading extends LazyLoadingDisabled ? EagerPost2 : LazyPost2

export declare const Post2: (new (init: ModelInit<Post2, Post2MetaData>) => Post2) & {
  copyOf(source: Post2, mutator: (draft: MutableModel<Post2, Post2MetaData>) => MutableModel<Post2, Post2MetaData> | void): Post2;
}

type EagerClubinfo = {
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
}

type LazyClubinfo = {
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
}

export declare type Clubinfo = LazyLoading extends LazyLoadingDisabled ? EagerClubinfo : LazyClubinfo

export declare const Clubinfo: (new (init: ModelInit<Clubinfo, ClubinfoMetaData>) => Clubinfo) & {
  copyOf(source: Clubinfo, mutator: (draft: MutableModel<Clubinfo, ClubinfoMetaData>) => MutableModel<Clubinfo, ClubinfoMetaData> | void): Clubinfo;
}

type EagerClubArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClubArray = {
  readonly id: string;
  readonly identifier?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClubArray = LazyLoading extends LazyLoadingDisabled ? EagerClubArray : LazyClubArray

export declare const ClubArray: (new (init: ModelInit<ClubArray, ClubArrayMetaData>) => ClubArray) & {
  copyOf(source: ClubArray, mutator: (draft: MutableModel<ClubArray, ClubArrayMetaData>) => MutableModel<ClubArray, ClubArrayMetaData> | void): ClubArray;
}

type EagerSchoolArray = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchoolArray = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SchoolArray = LazyLoading extends LazyLoadingDisabled ? EagerSchoolArray : LazySchoolArray

export declare const SchoolArray: (new (init: ModelInit<SchoolArray, SchoolArrayMetaData>) => SchoolArray) & {
  copyOf(source: SchoolArray, mutator: (draft: MutableModel<SchoolArray, SchoolArrayMetaData>) => MutableModel<SchoolArray, SchoolArrayMetaData> | void): SchoolArray;
}