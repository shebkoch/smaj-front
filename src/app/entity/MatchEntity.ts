export class MatchEntity {
  private _id: number;
  private _ctime: Date;
  private _etime: Date;
  private _isRating: boolean;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ctime(): Date {
    return this._ctime;
  }

  set ctime(value: Date) {
    this._ctime = value;
  }

  get etime(): Date {
    return this._etime;
  }

  set etime(value: Date) {
    this._etime = value;
  }

  get isRating(): boolean {
    return this._isRating;
  }

  set isRating(value: boolean) {
    this._isRating = value;
  }
}
