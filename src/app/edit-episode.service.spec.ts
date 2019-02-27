import { TestBed } from '@angular/core/testing';

import { EditEpisodeService } from './edit-episode.service';

describe('EditEpisodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditEpisodeService = TestBed.get(EditEpisodeService);
    expect(service).toBeTruthy();
  });
});
